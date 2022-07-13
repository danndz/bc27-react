import React from "react";

const ProductList = ({ products, onSelect }) => {
  const handleSelect = (product) => {
    // console.log(product);
    // Đây là product muốn xem chi tiết => ta cần truyền dữ liệu của product này lên component ShoppingCart

    // B3: Gọi tới prop onSelect và truyền product vào
    onSelect(product);
  };

  return (
    <div className="row">
      {products.map((product) => {
        return (
          <div key={product.id} className="col-sm-4">
            <div className="card">
              <img
                src={product.image}
                alt={product.name}
                width="100%"
                height="300px"
              />
              <div className="card-body">
                <h3 className="card-title">{product.name}</h3>
                <button
                  className="btn btn-dark"
                  onClick={() => handleSelect(product)}
                >
                  Details
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductList;
