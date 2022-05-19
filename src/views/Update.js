import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
const Update = (props) => {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/products/" + id)
      .then((res) => {
        setTitle(res.data.title);
        setPrice(res.data.price);
        setDescription(res.data.description);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleUpdate = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:8000/api/products/" + id, {
        title,
        price,
        description,
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <h1>Update The Product</h1>
      <form onSubmit={handleUpdate}>
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
    </div>
  );
};

export default Update;
