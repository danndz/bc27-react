import React, { Component } from "react";
import axios from "axios";
import ProductForm from "./ProductForm";
import ProductList from "./ProductList";

export default class ProductManagement extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
    };
  }

  fetchProducts = async () => {
    try {
      const { data } = await axios.get(
        "https://629757b414e756fe3b2dc8f0.mockapi.io/api/products"
      );
      // Call API thành công
      this.setState({ products: data });
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    this.fetchProducts();
  }

  render() {
    return (
      <div className="container">
        <h1 className="text-center text-primary">Product Management</h1>

        <div className="card mb-5">
          <div className="card-header bg-dark text-white">
            <strong>Product Form</strong>
          </div>
          <div className="card-body">
            <ProductForm
              onSuccess={this.fetchProducts}
            />
          </div>
        </div>

        <ProductList
          products={this.state.products}
        />
      </div>
    );
  }
}
