const KebabRecap = ({kebabRecap}) => {
    const {name, image} = kebabRecap
    return(
        <div>
            <div className="KebabList">
                <div className="BurgerImg"><img src={image} alt=""></img></div>
                <div className="Burgertitle">{name}</div>
            </div>
        </div>
    )
}

export default KebabRecap;