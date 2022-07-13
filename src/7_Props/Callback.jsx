import React from "react";

const Callback = (props) => {
  const handleClick = () => {
    // Gọi tới prop onClick và truyền kèm data
    props.onClick('Dan Nguyen')
    // tương đương gọi tới hàm handleClick('Dan Nguyen') của component Props
  }

  return (
    <div>
      <button
        className="btn btn-success"
        onClick={handleClick}
      >
        Clicker
      </button>
    </div>
  );
};

export default Callback;
