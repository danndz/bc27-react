// Để sử dụng các khái niệm tương tự lifecycle của class component bên trong function component ta import hàm useEffect từ react
import React, { useState, useEffect } from "react";

/**
 * MOUNTING: component được khởi tạo
 * - rendering
 * - run useEffect()
 *
 * UPDATING: state hoặc props thay đổi
 * - rendering
 * - run useEffect() cleanup
 * - run useEffect()
 *
 * UNMOUNT: component bị huỷ bỏ
 * - run useEffect() cleanup
 */

const Effect = () => {
  const [count, setCount] = useState(0);
  const onIncrease = () => {
    setCount(count + 1);
  };

  const [message, setMessage] = useState("");
  const handleGetMessage = () => {
    const message = prompt("Input your message:");
    setMessage(message);
  };

  // Hàm useEffect nhận vào 2 tham số
  // Tham số thứ nhất: một callback function
  // Tham số thứ hai (tuỳ chọn): trường hợp này là một array rỗng
  useEffect(() => {
    // effect: được thực thi một lần duy nhất sau lần render đầu tiên - tương tự componentDidMount
    // Thường dùng để call API, thay đổi state, tương tác với DOM
    console.log("useEffect []: run");

    // cleanup effect (tuỳ chọn): được thực thi trước khi component bị huỷ bỏ - tương tự componentWillUnmount
    // Thường dùng để cleanup data, clearTimeout, removeAddEventListener
    return () => {
      console.log("useEffect []: cleanup run");
    };
  }, []);

  // Dùng useEffect kèm điều kiện
  // useEffect nhận vào tham số thứ 2 là array chứa các depedencies (phụ thuộc)
  // depedencies là các giá trị state hoặc props
  useEffect(() => {
    // effect: được thực thi một lần sau lần render đầu tiên, và các lần render tiếp theo nếu các depedencies của nó bị thay đổi
    console.log("useEffect [count]: run");

    // cleanup effect (tuỳ chọn): được thực thi trước lần run effect tiếp theo hoặc trước khi component bị huỷ bỏ
    return () => {
      console.log("useEffect [count]: cleanup run");
    };
  }, [count]);

  useEffect(() => {
    console.log("useEffect [message]: run");
  }, [message]);

  // useEffect không có tham số thứ 2 (No recommend)
  useEffect(() => {
    // effect: luôn luôn được thực thi sau mỗi lần render
    console.log("useEffect không có tham số thứ 2: run");
  });

  console.log("render run");
  return (
    <div className="mt-3">
      <h1>Effect</h1>

      <p>Count: {count}</p>
      <button onClick={onIncrease}>Increase</button>

      <br />
      <br />

      <p>Message: {message}</p>
      <button onClick={handleGetMessage}>Get Message</button>
    </div>
  );
};

export default Effect;
