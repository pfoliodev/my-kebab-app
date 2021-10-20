const KebabRecap = ({ kebabRecap }) => {
    const { name, image } = kebabRecap;
    return (
      <div>
        <div className="KebabList">
          <div className="KebabImg">
            <img src={image} alt=""></img>
          </div>
          <div className="Kebabtitle">{name}</div>
        </div>
      </div>
    );
  };
  
  export default KebabRecap;
  