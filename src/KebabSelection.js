const KebabSelection = ({kebabSelection, selectionKebab}) => {
    const { surroundBy, meat, vegetable, sauce } = kebabSelection;
    return (
      <div>
        <div className="Card kebabSelection" onClick={selectionKebab}>
        <div className="CardTitle">Kebab : {surroundBy} - {meat} - {vegetable} - {sauce}</div>
        </div>
      </div>
    );
  };
  
  export default KebabSelection;