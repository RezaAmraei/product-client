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
      .then((res) =>
        setProducts(res.data).catch((err) => console.log(`error : ${err}`))
      );
  }, [render]);
  return (
    <div>
      <Form setRender={setRender} render={render} />
      <ProductList products={products} />
    </div>
  );
};
