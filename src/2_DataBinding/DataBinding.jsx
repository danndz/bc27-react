import React from "react";

const DataBinding = () => {
  const message = "Hello Cybersoft";
  const username = "Dan Nguyen";
  const getMessage = () => {
    return "Hello BC27";
  };

  // <h1>{expression}</h1>: Khi muốn truyền vào các biến, hàm, biểu thức javascript bên trong jsx ta sẽ đưa vào bên trong cặp ngoặc nhọn {}
  return (
    <div>
      <h1>{message}</h1>

      <h1>1 + 1 = {1 + 1}</h1>

      <h1>{getMessage()}</h1>

      <input value={username} />
    </div>
  );
};

export default DataBinding;
