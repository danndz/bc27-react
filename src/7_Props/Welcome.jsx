import React from "react";

// Function component nhận được 1 tham số là một object chứa dữ liệu được truyền từ component cha
// const Welcome = (props) => {
//   console.log(props);
//   return (
//     <div>
//       <p>
//         Name: {props.name} - Email: {props.email}
//       </p>
//     </div>
//   );
// };

// Class component mặc định có một thuộc tính là props chứa dữ liệu được truyền từ component cha
class Welcome extends React.Component {
  render() {
    return (
      <div>
        <p>
          Name: {this.props.name} - Email: {this.props.email}
        </p>
      </div>
    );
  }
}

Welcome.defaultProps = {
  name: "bc27",
  email: "bc27@gmail.com",
};

export default Welcome;
