import React from "react";

function ProductsCard({ product, onClick }) {
  function onProductCardClicked() {
    if (typeof onClick === "function") {
      onClick();
    }
  }

  return (
    <div onClick={onProductCardClicked} className="product-card">
      <div className="product-img-wrapper">
        <img className="product-img" src={product.image} alt={product.title} />
      </div>
      <div className="product-card-body">
        <h6 className="product-card-title">{product.title}</h6>
        <div className="product-card-desc">{product.description}</div>
      </div>
    </div>
  );
}
export default ProductsCard;
