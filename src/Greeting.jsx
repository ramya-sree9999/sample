import React, { useState, useEffect } from "react";

function Greeting() {
  const [products, setProducts] = useState([]);

  async function getProducts() {
    try {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setProducts(data); // Update state with fetched products
    } catch (error) {
      console.error("Unable to fetch", error);
    }
  }

  useEffect(() => {
    getProducts(); // Fetch products when component mounts
  }, []);

  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          <h2>{product.title}</h2>
          <h3>Price:{product.price}</h3> {/* Correct property name is `title`, not `name` */}
        </li>
      ))}
    </ul>
  );
}

export default Greeting;
