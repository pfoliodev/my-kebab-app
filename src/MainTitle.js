const MainTitle = ({mainTitle}) => {
    const {name} = mainTitle

    return(
        <div>               
            <div className="Burgertitle">{name}</div>
        </div>
    )
}

export default MainTitle;