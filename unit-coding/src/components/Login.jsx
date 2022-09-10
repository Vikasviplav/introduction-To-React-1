import React from "react";

const Login = () => {
  const [title, setTitle] = React.useState("");
  const [brand,setBrand] = React.useState("");
  const [image,setImage] = React.useState("");
  const [category,setCategory] = React.useState("");
  const [price,setPrice] = React.useState("");
  const [products, setProducts] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(false);

  const addProduct = () => {
    const payload = {
      title,
      brand,
      image,
      category,
      price
    };

    const dataToPost = JSON.stringify(payload);
    //console.log(dataToPost);
    fetch(`http://localhost:3002/products`, {
      method: 'POST',
      body: dataToPost,
      headers: {
        "content-Type": "application/json",
      },
    }).then(() => {
        fetch(`http://localhost:3002/products`)
          .then((res) => res.json())
          .then((res) => setProducts(res))
          .catch((err) => console.log(err));
      });
  };

  return (
    <div>
      <h1>Here User can Create Product</h1>
      <input
        type="text"
        placeholder="Add title"
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Add brand"
        onChange={(e) => setBrand(e.target.value)}
      />
      <input
        type="text"
        placeholder="Add image url"
        onChange={(e) => setImage(e.target.value)}
      />
      <input
        type="text"
        placeholder="Add category"
        onChange={(e) => setCategory(e.target.value)}
      />
      <input
        type="text"
        placeholder="Add price"
        onChange={(e) => setPrice(e.target.value)}
      />
      
      <button onClick={addProduct}>Add</button>
      <hr />
      
    </div>
  );
};

export default Login;
