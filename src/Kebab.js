const Kebab = ({ kebab, customKebab }) => {
    const { name, image } = kebab;
    return (
      <div>
        <div className="KebabList" onClick={customKebab}>
          <div>
            <img src={image} alt=""></img>
          </div>
          <div>{name}</div>
        </div>
      </div>
    );
  };
  
  export default Kebab;