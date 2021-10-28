import React, { useEffect } from "react";
import axios from "axios";

function Products(props) {
  useEffect(() => {
    async function getProducts() {
      const response = await axios.get("http://localhost:5000/api/products");
      console.log("RESPONSE", response);
    }
    getProducts();
  }, []);

  return (
    <div>
      <h1>All Products</h1>
    </div>
  );
}

export default Products;
