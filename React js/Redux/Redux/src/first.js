import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import Stores from "./Stores"
import Counting from "./Counting";
import { } from "./Slice";


import CustomCounter from "./CustCunt";

function App() {
  return (
    <Provider store={Stores}>
      <Counting />

      <CustomCounter/>
    </Provider>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
