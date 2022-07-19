import React from "react";
import HelloWorld from "./1_Components/HelloWorld";
import Greeting from "./1_Components/Greeting";
import Home from "./1_Ex_HomePage/Home";
import Msi from "./1_Ex_MSI/Msi";
import DataBinding from "./2_DataBinding/DataBinding";
import Event from "./3_Event/Event";
import State from "./4_State/State";
import SelectCar from "./4_Ex_SelectCar/SelectCar";
import ConditionalRendering from "./5_ConditionalRendering/ConditionalRendering";
import Map from "./6_Map/Map";
import Movie from "./6_Ex_Movie/Movie";
import Props from "./7_Props/Props";
import ShoesShop from "./7_Ex_ShoesShop/ShoesShop";
import ShoppingCart from "./BT_ShoppingCart/ShoppingCart";
import Lifecycle from "./8_Lifecycle/Lifecycle";
import ProductManagement from "./BT_ProductManagement/ProductManagement";

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
    // <SelectCar />

    // 5. Conditional rendering
    // <ConditionalRendering />

    // 6. Map
    // <Map />
    // <Movie />

    // 7. Props
    // <Props />
    // <ShoesShop />

    // Bài tập tổng hợp State, Props
    // <ShoppingCart />

    // 8. Lifecycle
    // <Lifecycle />

    // Bài tập tổng hợp State, Props, Lifecycle
    <ProductManagement />
  );
}

export default App;









