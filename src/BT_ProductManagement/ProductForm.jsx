import React, { Component } from "react";
import axios from "axios";

export default class ProductForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // values: dùng để lưu trữ giá trị của các input
      values: {
        name: "",
        description: "",
        price: "",
        image: "",
      },
    };
  }

  // Bắt sự kiện thay đổi giá trị của input và setState
  handleChange = (evt) => {
    const { value, name } = evt.target;
    // name: name || descrition || price || image

    this.setState((state) => ({
      values: {
        ...state.values,
        [name]: value,
      },
    }));
  };

  // Bắt sự kiện form được submit
  handleSubmit = async (evt) => {
    // Ngăn chặn hành vi reload lại page khi submit form
    evt.preventDefault();

    const { id, ...payload } = this.state.values;

    try {
      if (id) {
        // Cập nhật
        await axios.put(
          `https://629757b414e756fe3b2dc8f0.mockapi.io/api/products/${id}`,
          payload
        );
      } else {
        // Tạo mới
        await axios.post(
          "https://629757b414e756fe3b2dc8f0.mockapi.io/api/products",
          payload
        );
      }

      // Call API thành công
      // B1: Reset Form
      this.setState({
        values: {
          name: "",
          description: "",
          price: "",
          image: "",
        },
      });
      // B2: Bởi vì khi call API thêm sản phẩm, dữ liệu chỉ mới được thay đổi ở phía server, để UI được cập nhật ta cần gọi lại API get products, tuy nhiên API này đã được viết ở component ProductManagement => ta chỉ cần truyền 1 tín hiệu lên component ProductManagement để nó gọi lại API get products
      this.props.onSuccess();
    } catch (error) {
      console.log(error);
    }
  };

  componentDidUpdate(prevProps, prevState) {
    // Bởi vì componentDidUpdate sẽ tự động được thực thi khi state hoặc props thay đổi
    // Kiểm tra nếu prop product thay đổi, setState lại cho values bằng giá trị mới của prop product
    if (this.props.product && this.props.product !== prevProps.product) {
      this.setState({ values: { ...this.props.product } });
    }
  }

  render() {
    const { values } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        {/* Name */}
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            id="name"
            className="form-control"
            value={values.name}
            name="name"
            onChange={this.handleChange}
          />
        </div>
        {/* Description */}
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input
            id="description"
            className="form-control"
            value={values.description}
            name="description"
            onChange={this.handleChange}
          />
        </div>
        {/* Image */}
        <div className="mb-3">
          <label htmlFor="image" className="form-label">
            Image
          </label>
          <input
            id="image"
            className="form-control"
            value={values.image}
            name="image"
            onChange={this.handleChange}
          />
        </div>
        {/* Price */}
        <div className="mb-3">
          <label htmlFor="price" className="form-label">
            Price
          </label>
          <input
            id="price"
            className="form-control"
            value={values.price}
            name="price"
            onChange={this.handleChange}
          />
        </div>
        {/* Submit */}
        <button className="btn btn-dark">Submit</button>
      </form>
    );
  }
}
