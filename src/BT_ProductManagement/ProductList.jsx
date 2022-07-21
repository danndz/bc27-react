import React, { Component } from "react";
import axios from "axios";

export default class ProductList extends Component {
  handleDelete = async (productId) => {
    try {
      // Call API xoá sản phẩm
      await axios.delete(
        `https://629757b414e756fe3b2dc8f0.mockapi.io/api/products/${productId}`
      );
      // Thành công, gọi tới prop onDeleteSuccess để chạy lại hàm fetchProducts ở component ProductManagement
      this.props.onDeleteSuccess();
    } catch (error) {
      console.log(error);
    }
  };

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
                  <button
                    className="btn btn-success me-2"
                    onClick={() => this.props.onSelectProduct(product.id)}
                  >
                    Update
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => this.handleDelete(product.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}
