const KebabCheckout = ({ kebabCheckout, deleteKebab }) => {
    const { quantity } = kebabCheckout;
    return (
      <div className="Card">
        <div className="CardTitle">
          Kebab - {kebabCheckout[0].name} - {kebabCheckout[1].name} -{" "}
          {kebabCheckout[2].name} - {kebabCheckout[3].name}
        </div>
        <div className="CardDelete">
          <img
            src="assets/deleteicon.png"
            alt=""
            width="40"
            onClick={deleteKebab}
          ></img>
        </div>
      </div>
    );
  };
  
  export default KebabCheckout;