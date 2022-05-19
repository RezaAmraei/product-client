import React, { useState, useEffect } from "react";
import Form from "../components/Form";
import ProductList from "../components/ProductList";
import axios from "axios";

export default () => {
  const [products, setProducts] = useState([]);
  const [render, setRender] = useState(0);
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(`error : ${err}`));
  }, [render]);

  const removeFromDom = (productId) => {
    setProducts(products.filter((product) => product._id != productId));
  };
  return (
    <div>
      {JSON.stringify(render)}
      <Form setRender={setRender} render={render} />
      <ProductList products={products} removeFromDom={removeFromDom} />
    </div>
  );
};
