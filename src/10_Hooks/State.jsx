// Để sử dụng state trong function component ta sẽ import hàm useState từ react
import React, { useState } from "react";

/**
 * Lưu ý:
 * - useState chỉ có thể được sử dụng bên trong function component
 * - Ta nên khai báo useState ở trên đầu của component
 * - Không được khai báo useState bên trong các block if() {}, for() {},...
 */

const State = () => {
  // useState nhận vào 1 tham số là giá trị khởi tạo của state
  // useState trả về 1 array gồm 2 phần tử
  // - Phần tử thứ nhất: Giá trị của state
  // - Phần tử thứ hai: Hàm dùng để thay đổi giá trị của state
  const [count, setCount] = useState(0);
  const onIncrease = () => {
    // Để thay đổi giá trị của state count, ta dùng hàm setCount
    setCount(count + 1);
  };

  // Để tạo nhiều giá trị state ta chỉ cần gọi hàm useState nhiều lần
  const [message, setMessage] = useState("");
  const handleGetMessage = () => {
    const message = prompt("Input your message:");
    // Để thay đổi giá trị của state message, ta dùng hàm setMessage
    setMessage(message);
  };

  // State là một array
  const [colors, setColors] = useState(["red", "green", "blue"]);
  const handleAddColor = () => {
    const color = prompt("Input your color:");
    // Để thay đổi giá trị của state là array, ta cần tạo ra và thay đổi trên một array mới

    // Cách 1:
    // const newColors = [...colors, color];
    // setColors(newColors);

    // Cách 2:
    // setColors([...colors, color]);

    // Cách 3: Hàm setColors nhận vào một callback có tham số là giá trị hiện tại của state colors và return về giá trị state colors mới
    setColors((colors) => [...colors, color]);
  };
  const handleRemoveColor = () => {
    const color = prompt("Input your color:");

    // Cách 1:
    // const newColors = colors.filter((item) => item !== color);
    // setColors(newColors);

    // Cách 2:
    setColors((colors) => colors.filter((item) => item !== color));
  };

  // State là một object
  const [user, setUser] = useState({ username: "", email: "" });
  const handleChange = (evt) => {
    const { name, value } = evt.target;
    // Cách 1:
    // setUser({ ...user, [name]: value });

    // Cách 2:
    setUser((user) => ({ ...user, [name]: value }));
  };

  return (
    <div className="mt-3">
      <h1>State</h1>

      <p>Count: {count}</p>
      <button onClick={onIncrease}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>

      <br />
      <br />

      <p>Message: {message}</p>
      <button onClick={handleGetMessage}>Get Message</button>

      <br />
      <br />

      <p>Colors: {colors.join(", ")}</p>
      <button onClick={handleAddColor}>Add color</button>
      <button onClick={handleRemoveColor}>Remove color</button>

      <br />
      <br />

      <p>
        User: {user.username} - {user.email}
      </p>
      <input
        placeholder="Username"
        value={user.username}
        name="username"
        onChange={handleChange}
      />
      <input
        placeholder="Email"
        value={user.email}
        name="email"
        onChange={handleChange}
      />
    </div>
  );
};

export default State;

// this.state = {
//   count: 0,
//   message: ""
// }
// this.setState({count: 1})
