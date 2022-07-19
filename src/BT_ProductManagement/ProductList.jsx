import React, { Component } from "react";

export default class ProductList extends Component {
  render() {
    const { products } = this.props;

    return (
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Image</th>
            <th>Price</th>
            <th>Description</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => {
            return (
              <tr key={product.id}>
                <td>{product.name}</td>
                <td>
                  <img
                    src={product.image}
                    alt={product.name}
                    width="70px"
                    height="70px"
                  />
                </td>
                <td>{product.price}</td>
                <td>{product.description}</td>
                <td>
                  <button className="btn btn-success me-2">Update</button>
                  <button className="btn btn-danger">Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}
