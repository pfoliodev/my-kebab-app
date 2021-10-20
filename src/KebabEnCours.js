const KebabEnCours = ({ kebabEnCours }) => {
  const { name, image } = kebabEnCours;
  return (
    <div className="Card">
      <div className="CardTitle">{name}</div>
      <div className="CardImg">
        <img src={image} width="40"></img>
      </div>
    </div>
  );
};

export default KebabEnCours;