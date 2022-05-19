import React, { useState, useEffect } from "react";
import axios from "axios";

const Form = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/products", {
        title,
        price,
        description,
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label>Title </label>
        <input onChange={(e) => setTitle(e.target.value)} value={title} />
      </p>
      <p>
        <label>Price </label>
        <input
          type="number"
          onChange={(e) => setPrice(e.target.value)}
          value={price}
        />
      </p>
      <p>
        <label>Description </label>
        <input
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />
      </p>
      <input type="submit" />
    </form>
  );
};

export default Form;
