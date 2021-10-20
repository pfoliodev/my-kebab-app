import "./App.css";
import React from "react";
import Kebab from "./Kebab";
import MainTitle from "./MainTitle";
import KebabEnCours from "./KebabEnCours";
import KebabRecap from "./KebabRecap";
import KebabCheckout from "./KebabCheckout";

const mainTitle = {
  surroundBy: [
    {
      name: "Pain ou galette ?",
    },
  ],

  meat: [
    {
      name: "Plutôt viande ou tofu ?",
    },
  ],
  vegetable: [
    {
      name: "Salade, tomates, oignons ?",
    },
  ],
  sauce: [
    {
      name: "Quelques sauces ?",
    },
  ],
  recap: [
    {
      name: "On récapitule",
    },
  ],
};

const kebab = {
  surroundBy: [
    {
      name: "Pain",
      image: "assets/clipart-bread-flat-bread-2 1.png",
    },
    {
      name: "Galette",
      image: "assets/galette.png",
    },
  ],
  meat: [
    {
      name: "Viande",
      image: "assets/kebab1.png",
    },
    {
      name: "Tofu",
      image: "assets/tofu1.png",
    },
  ],
  vegetable: [
    {
      name: "Tomate",
      image: "assets/tomato1.png",
    },
    {
      name: "Salade",
      image: "assets/salad1.png",
    },
    {
      name: "Ognion",
      image: "assets/onion1.png",
    },
  ],
  sauce: [
    {
      name: "Blanche",
      image: "assets/yogurts1.png",
    },
    {
      name: "Harissa",
      image: "assets/chili-sauce1.png",
    },
    {
      name: "Andalouse",
      image: "assets/andalouse.png",
    },
    {
      name: "BBQ",
      image: "assets/barbecue.png",
    },
    {
      name: "Ketchup",
      image: "assets/ketchup.png",
    },
    {
      name: "Curry",
      image: "assets/curry.png",
    },
  ],
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: true,
      kebabEnCours: [],
      checkout: [],
      position: 0,
      countCheckout: 0,
    };
    this.validKebab = this.validKebab.bind(this);
    this.remakeKebab = this.remakeKebab.bind(this);
    this.orderKebab = this.orderKebab.bind(this);
  }
  customKebab = (kebab) => () => {
    let newElem = [...this.state.kebabEnCours];
    newElem.push(kebab);
    this.setState({ kebabEnCours: newElem });
    if (this.state.position < 4) {
      this.setState({ position: this.state.position + 1 });
    }
  };

  deleteKebab = (index) => () => {
    let newCheckout = [...this.state.checkout];
    let newCountCheckout = this.state.countCheckout;
    newCheckout.splice(index, 1);
    this.setState({ checkout: newCheckout });
    this.setState({ countCheckout: newCountCheckout - 1 });
    console.log(this.state.countCheckout);
  };

  validKebab() {
    let newCheckout = [...this.state.checkout];
    let kebabEnCours = [...this.state.kebabEnCours];
    let newCountCheckout = this.state.countCheckout;
    newCheckout.push(kebabEnCours);
    this.setState({ checkout: newCheckout });
    this.setState({ position: 0 });
    this.setState({ countCheckout: newCountCheckout + 1 });
    this.setState({ kebabEnCours: [] });
    console.log(this.state.countCheckout);
  }

  remakeKebab() {
    this.setState({ kebabEnCours: [] });
    this.setState({ position: 0 });
  }

  orderKebab() {
    this.setState({ position: 5 });
  }

  render() {
    console.log(this.state.countCheckout);
    return (
      <div className="App">
        <div className="MainContainer">
          <div className="ContainerMenu">
            <img src="assets/logo.png"></img>
          </div>

          <div className="MainTitle">
            {this.state.position === 0
              ? mainTitle.surroundBy.map((mainTitle) => (
                  <MainTitle key={mainTitle} mainTitle={mainTitle} />
                ))
              : null}
            {this.state.position === 1
              ? mainTitle.meat.map((mainTitle) => (
                  <MainTitle key={mainTitle} mainTitle={mainTitle} />
                ))
              : null}
            {this.state.position === 2
              ? mainTitle.vegetable.map((mainTitle) => (
                  <MainTitle key={mainTitle} mainTitle={mainTitle} />
                ))
              : null}
            {this.state.position === 3
              ? mainTitle.sauce.map((mainTitle) => (
                  <MainTitle key={mainTitle} mainTitle={mainTitle} />
                ))
              : null}
            {this.state.position === 4
              ? mainTitle.recap.map((mainTitle) => (
                  <MainTitle key={mainTitle} mainTitle={mainTitle} />
                ))
              : null}
            {this.state.position === 5 ? (
              <div className="Finish">
                <div className="MainTitle">C'est parti !</div>
                <div className="subTitle">
                  Notre maitre kébabier prépare votre commande.
                </div>
                <div className="lastSubTitle">Patience...</div>
                <div className="imgLast">
                  <img src="assets/soso.png"></img>
                </div>
              </div>
            ) : null}
          </div>
          <div className="ContainerList">
            {this.state.position === 0
              ? kebab.surroundBy.map((kebab) => (
                  <Kebab
                    key={kebab.name}
                    kebab={kebab}
                    customKebab={this.customKebab(kebab)}
                  />
                ))
              : null}
            {this.state.position === 1
              ? kebab.meat.map((kebab) => (
                  <Kebab
                    key={kebab.name}
                    kebab={kebab}
                    customKebab={this.customKebab(kebab)}
                  />
                ))
              : null}
            {this.state.position === 2
              ? kebab.vegetable.map((kebab) => (
                  <Kebab
                    key={kebab.name}
                    kebab={kebab}
                    customKebab={this.customKebab(kebab)}
                  />
                ))
              : null}
            {this.state.position === 3
              ? kebab.sauce.map((kebab) => (
                  <Kebab
                    key={kebab.name}
                    kebab={kebab}
                    customKebab={this.customKebab(kebab)}
                  />
                ))
              : null}
            {this.state.position === 4
              ? this.state.kebabEnCours.map((kebabRecap) => (
                  <KebabRecap key={kebabRecap.name} kebabRecap={kebabRecap} />
                ))
              : null}
          </div>
          <div className="btnAction">
            {this.state.position === 4 ? (
              <div className="BtnTerminerKebab" onClick={this.validKebab}>
                Valider
              </div>
            ) : null}
            {this.state.position === 4 ? (
              <div className="BtnAnnulerKebab" onClick={this.remakeKebab}>
                Annuler
              </div>
            ) : null}
          </div>
        </div>
        {this.state.position != 5 ? (
          <div className="ContainerRight">
            <div className="ContainerCard">
              <div>Kebab en cours</div>
              {this.state.kebabEnCours.map((kebabEnCours) => (
                <KebabEnCours
                  key={kebabEnCours.name}
                  kebabEnCours={kebabEnCours}
                />
              ))}
            </div>
            <div className="ContainerCard">
              <div>Mon Panier</div>
              {this.state.checkout.map((kebabCheckout, index) => (
                <KebabCheckout
                  key={kebabCheckout.index}
                  kebabCheckout={kebabCheckout}
                  deleteKebab={this.deleteKebab(index)}
                />
              ))}
            </div>
            {/*** Si on estime à 5.50 le prix d'un Kebab */}
            <div>
              {this.state.countCheckout > 0 ? (
                <div className="PriceOrder">
                  Total à payer : {(this.state.countCheckout * 5.5).toFixed(2)}{" "}
                  €
                </div>
              ) : null}
              {this.state.countCheckout > 0 ? (
                <div className="BtnOrder" onClick={this.orderKebab}>
                  Commander
                </div>
              ) : null}
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}

export default App;
