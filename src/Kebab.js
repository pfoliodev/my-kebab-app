const Kebab = ({kebab, customKebab}) => {
    const {name, image} = kebab
    return(
        <div>
            <div className="KebabList" onClick={customKebab}>
                <div className="BurgerImg"><img src={image} alt=""></img></div>
                <div className="Burgertitle">{name}</div>
            </div>
        </div>
    )
}

export default Kebab;