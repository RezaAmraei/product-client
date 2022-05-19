import React from "react";
import { Link } from "react-router-dom";
const ProductList = (props) => {
  return (
    <div>
      {props.products.map((product, i) => {
        return (
          <div key={i}>
            <Link to={`/product/${product._id}`}>{product.title}</Link>

            <hr />
          </div>
        );
      })}
    </div>
  );
};

export default ProductList;
