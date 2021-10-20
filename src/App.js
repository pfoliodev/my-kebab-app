import './App.css';
import React from "react";
import Kebab from "./Kebab"
import MainTitle from "./MainTitle"
import KebabEnCours from './KebabEnCours';
import KebabRecap from './KebabRecap';

const mainTitle = {
  "surroundBy" : [{
    "name": "Pain ou galette ?"
  }],
  
  "meat" : [{
    "name": "Plutôt viande ou tofu ?"
  }],
  "vegetable" : [{
    "name": "Salade, tomates, oignons ?"
  }],
  "sauce": [{
    "name": "Quelques sauces ?"
  }],
  "recap": [{
    "name": "On récapitule"
  }]
}



const kebab = {
  "surroundBy" : [{
    "name": "Pain",
    "image": "assets/clipart-bread-flat-bread-2 1.png"
  },
  {
    "name": "Galette",
    "image": "assets/galette.png"
  }],
  "meat" : [{
    "name": "Viande",
    "image": "assets/kebab1.png"
  },
  {
    "name": "Tofu",
    "image": "assets/tofu1.png"
  }],
  "vegetable" : [{
    "name": "Tomate",
    "image": "assets/tomato1.png"
  },
  {
    "name": "Salade",
    "image": "assets/salad1.png"
  },
  {
    "name": "Ognion",
    "image": "assets/onion1.png"
  }],
  "sauce": [{
    "name": "Blanche",
    "image": "assets/yogurts1.png"
  },
  {
    "name": "Harissa",
    "image": "assets/chili-sauce1.png"
  },
  {
    "name": "Andalouse",
    "image": "assets/andalouse.png"
  },
  {
    "name": "BBQ",
    "image": "assets/barbecue.png"
  },
  {
    "name": "Ketchup",
    "image": "assets/ketchup.png"
  },
  {
    "name": "Curry",
    "image": "assets/curry.png"
  }]
}


class App extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      selected: true,
      kebabEnCours: [],
      checkout:[],
      position : 0,
      countCheckout: 0
    }
    this.selectChoice = this.selectChoice.bind(this);
    this.validKebab = this.validKebab.bind(this);
  }

  customKebab = kebab => () => {
    this.state.kebabEnCours.push(kebab)
      if(this.state.position < 4){
        this.setState({position : this.state.position+1})  
      }
    }

  selectChoice(kebab){
    // const {kebabEnCours} = this.state
    // if(kebabEnCours.find(el => el.kebab.name === kebab.name)){
    //   console.log("Y'en a déjà !")
    // }else{
    //   this.state.kebabEnCours.push(kebab)
    // }
  }

  validKebab(){
    this.state.checkout.push(this.state.kebabEnCours)
    this.setState({position : 0})
    this.setState({countCheckout : this.state.countCheckout + 1})
    this.setState({kebabEnCours : []}) 
    console.log(this.state.checkout)
  }

  render(){
    return (
      <div className="App">
        <div className="MainContainer">
          <div className="ContainerMenu">
                <img src="assets/6446596109fbf0bfd1b42bfd630a298d 1.png"></img>
            </div>

            <div className="MainTitle">
            {this.state.position === 0 ? mainTitle.surroundBy.map(mainTitle => <MainTitle key={mainTitle} mainTitle={mainTitle} />) : null}
              {this.state.position === 1 ? mainTitle.meat.map(mainTitle => <MainTitle key={mainTitle} mainTitle={mainTitle} />) : null}
              {this.state.position === 2 ? mainTitle.vegetable.map(mainTitle => <MainTitle key={mainTitle} mainTitle={mainTitle} />) : null}
              {this.state.position === 3 ? mainTitle.sauce.map(mainTitle => <MainTitle key={mainTitle} mainTitle={mainTitle} />): null}
              {this.state.position === 4 ? mainTitle.recap.map(mainTitle => <MainTitle key={mainTitle} mainTitle={mainTitle} />): null}
            </div>
            <div className="ContainerList"> 
              {this.state.position === 0 ? kebab.surroundBy.map(kebab => <Kebab key={kebab.name} kebab={kebab} customKebab={this.customKebab(kebab)}/>) : null}
              {this.state.position === 1 ? kebab.meat.map(kebab => <Kebab key={kebab.name} kebab={kebab} customKebab={this.customKebab(kebab)} />) : null}
              {this.state.position === 2 ? kebab.vegetable.map(kebab => <Kebab key={kebab.name} kebab={kebab} customKebab={this.customKebab(kebab)} />) : null}
              {this.state.position === 3 ? kebab.sauce.map(kebab => <Kebab key={kebab.name} kebab={kebab} customKebab={this.customKebab(kebab)}/>): null}
              {this.state.position === 4 ? this.state.kebabEnCours.map(kebabRecap => <KebabRecap key={kebabRecap.name} kebabRecap={kebabRecap} />): null}
            </div>
            {this.state.position === 4 ? <div className="BtnTerminerKebab" onClick={this.validKebab}>Valider</div> : null}
            
            {/* <div className="ContainerBtn">
            {this.state.position > 1 ? <div className="btn_continue" onClick={this.selectChoice}>Continuer</div> : null}
            </div> */}
        </div>

        <div className="ContainerRight"> 
          <div className="ContainerCard">
          <div>Kebab en cours</div> 
          {this.state.kebabEnCours.map(kebabEnCours => <KebabEnCours key={kebabEnCours.name} kebabEnCours={kebabEnCours} />)}
          </div>
          <div className="ContainerCard">
          <div>Mon Panier</div> 
          {this.state.checkout.map((checkout, index) =>             
          <div className="Card" key={index}>
              <div className="CardTitle">Kebab - {checkout[0].name} - {checkout[1].name} - {checkout[2].name} - {checkout[3].name}</div>
              <div className="CardImg"><img src={checkout[0].image} width="40"></img></div>
          </div>
            )}
          </div>
          {/*** Si on estime à 5.50 le prix d'un Kebab */}
          {this.state.countCheckout > 0 ? <div className="PriceOrder">Total à payer : {this.state.countCheckout * 5.50} €</div> : null}
          {this.state.countCheckout > 0 ? <div className="BtnOrder">Commander</div> : null}
          
        </div>
      </div>
    );
  }
}

export default App;
