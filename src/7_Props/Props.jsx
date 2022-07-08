// rafce
import React from "react";
import Product from "./Product";
import Welcome from "./Welcome";

const products = [
  { id: 1, name: "Iphone 13 Pro Max", price: 30000000 },
  { id: 2, name: "Samsung Galaxy S22 Ultra", price: 28000000 },
  { id: 3, name: "Xiaomi Mi 12", price: 20000000 },
];

const Props = () => {
  return (
    <div className="container">
      <h1>Props</h1>
      <Welcome />
      <Welcome name="Yasuo" email="yasuo@gmail.com" />
      <Welcome name="Yone" email="yone@gmail.com" />

      <div className="row">
        {products.map((product) => {
          return (
            <div key={product.id} className="col-sm-4">
              <Product product={product} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Props;
