import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./compounent/Header";
import Body from "./compounent/Body";



function GithubProfile() {
  return (
    <>
      <Header />
      <Body />
    
    </>
  );
}

// Rendering
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<GithubProfile />);
