import React from "react";
import HelloWorld from "./1_Components/HelloWorld";
import Greeting from "./1_Components/Greeting";
import Home from "./1_Ex_HomePage/Home";
import Msi from "./1_Ex_MSI/Msi";
import DataBinding from "./2_DataBinding/DataBinding";
import Event from "./3_Event/Event";
import State from "./4_State/State";
import SelectCar from "./4_Ex_SelectCar/SelectCar";

// Component: một function return về JSX mô tả những gì sẽ được hiển thị trên giao diện
function App() {
  // JSX: Javascript XML
  // JSX là một cú pháp đặc biệt cho phép viết HTML bên trong javascript
  // Bởi vì JSX gần với JS hơn là với HTML, nên các property/attribute của thẻ HTML ta cần chuyển thành camelCase
  // VD: class -> className, for -> htmlFor, tabindex -> tabIndex
  // return (
  //   <div className="App">
  //     <h1>Hello Reactjs</h1>
  //   </div>
  // );
  // Bản chất đoạn code JSX trên sẽ được transform về JS thuần như sau
  // return React.createElement(
  //   "div", { className: "App" },
  //   React.createElement("h1", null, "Hello Reactjs")
  // );

  return (
    // 1. Components
    // <div className="text-center text-primary">
    //   <h1>App</h1>
    //   <HelloWorld />
    //   <Greeting />
    // </div>
    // <Home />
    // <Msi />

    // 2. Data Binding
    // <DataBinding />

    // 3. Event
    // <Event />

    // 4. State
    // <State />
    <SelectCar />
  );
}

export default App;
