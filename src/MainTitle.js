const MainTitle = ({ mainTitle }) => {
    const { name } = mainTitle;
  
    return (
      <div>
        <div className="MainTitle">{name}</div>
      </div>
    );
  };
  
  export default MainTitle;