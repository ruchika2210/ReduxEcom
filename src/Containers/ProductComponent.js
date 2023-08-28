import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Styles/productComponentStyle.css";

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((product) => {
    const { id, title, price, image, category } = product;
    return (
      <div className="four wide column" key={id}>
        <Link to={`product/${id}`}>
          {" "}
          {/* Updated class name */}
          <div className="ui card">
            {" "}
            {/* Removed unnecessary card link class */}
            <div className="image">
              <img src={image} alt={title} />
            </div>
            <div className="content">
              <div className="header">{title}</div>
              <div className="meta price">$ {price}</div>
              <div className="meta">{category}</div>
            </div>
          </div>
        </Link>
      </div>
    );
  });

  return (
    <div className="ui grid">
      {" "}
      {/* Added grid container */}
      <div className="four column row">{renderList}</div> {/* Added row */}
    </div>
  );
};

export default ProductComponent;
