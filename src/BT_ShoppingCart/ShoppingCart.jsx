import React from "react";
import ProductDetails from "./ProductDetails";
import ProductList from "./ProductList";
import Cart from "./Cart";
import data from "./data.json";

class ShoppingCart extends React.Component {
  // snippet: rconst
  constructor(props) {
    super(props);

    this.state = {
      selectedProduct: null,
      isOpen: false,
    };
  }

  // B1: Định nghĩa hàm handleSelect nhận dữ liệu product từ component ProductList
  handleSelect = (product) => {
    console.log(product);
    // product hiện tại chỉ có thể truy cập được bên trong hàm handleSelect, để có thể truyền giá trị product này xuống component ProductDetails ta cần gán giá trị của nó cho state selectedProduct
    this.setState({ selectedProduct: product });
  };

  // 2 hàm dùng để thay trạng thái state isOpen để quyết định xem modal Cart có được hiển thị hay không
  handleOpen = () => {
    this.setState({ isOpen: true });
  };
  handleClose = () => {
    this.setState({ isOpen: false });
  };

  render() {
    const { selectedProduct, isOpen } = this.state;

    return (
      <div className="container">
        <h1 className="text-center text-primary">Phone Shop</h1>

        {/* Button dùng để open cart modal */}
        <div className="d-flex justify-content-end mb-5">
          <button className="btn btn-success" onClick={this.handleOpen}>
            Cart
          </button>
        </div>

        {/* B2: Truyền hàm handleSelect xuống component ProductList thông qua prop onSelect */}
        <ProductList products={data} onSelect={this.handleSelect} />

        <ProductDetails product={selectedProduct} />

        <Cart isOpen={isOpen} onClose={this.handleClose} />
      </div>
    );
  }
}

export default ShoppingCart;
