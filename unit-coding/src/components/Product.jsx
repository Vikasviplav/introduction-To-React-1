import React from "react";
import { Link } from "react-router-dom";
import "./Product.css"

const Products = () => {
  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    fetch(`http://localhost:3002/products`)
      .then((res) => res.json())
      .then((res) => setProducts(res))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      {
        <div id = "table">
          <h1>Product Page</h1>
          <table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Price</th>
                <th>Brand</th>
                <th>Category</th>
                <th>Image</th>
              </tr>
            </thead>
            <tbody>
              {products?.map((product) => (
                <tr key={product.id}>
                  <td>{product.title}</td>
                  <td>INR : {product.price}</td>
                  <td>{product.brand}</td>
                  <td><img src={product.image }></img></td>
                  <td>{product.category}</td>
                  <td>
                    <Link to={`/products/${product.id}`}>Product/Id...</Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      }
    </>
  );
};

export default Products;