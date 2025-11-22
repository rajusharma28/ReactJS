import React, { useState } from "react";
import ReactDOM from "react-dom/client";

import Header from "./component/Header";
import Card from "./component/Card";
import Footer from "./component/Footer";
import arr from "./utils/dummy";

function App() {
  const [A, setA] = useState(arr);

  function sortByPrice() {
    // Create a new sorted array (important for React state update)
    const sortedArray = [...A].sort((a, b) => a.price - b.price);
    setA(sortedArray);
  }


  function HighToLow(){

     const HighToLow = [...A].sort((a, b) => b.price - a.price);
    setA(HighToLow);

  }
  return (
    <>
      <Header />
<button
  onClick={sortByPrice}
  style={{
    background: "#007bff",   // bright blue
    color: "white",
    fontWeight: "600",
    height: "50px",
    width: "140px",
    marginTop: "20px",
    borderRadius: "8px",
    cursor: "pointer",
    marginRight: "20px",
    border: "none",
    transition: "0.3s",
  }}
  onMouseEnter={(e) => (e.target.style.background = "#339cff")}
  onMouseLeave={(e) => (e.target.style.background = "#007bff")}
>
  🔽 Sort Low → High
</button>

<button
  onClick={HighToLow}
  style={{
    background: "#ff4b2b",   // attractive orange-red
    color: "white",
    fontWeight: "600",
    height: "50px",
    width: "140px",
    marginTop: "20px",
    borderRadius: "8px",
    cursor: "pointer",
    border: "none",
    transition: "0.3s",
  }}
  onMouseEnter={(e) => (e.target.style.background = "#ff6b4a")}
  onMouseLeave={(e) => (e.target.style.background = "#ff4b2b")}
>
  🔼 Sort High → Low
</button>





      <div className="cards-container">
        {A.map((value, index) => (
          <Card
            key={index}
            cloth={value.cloth}
            offer={value.offer}
            image={value.image}
            price={value.price}
          />
        ))}
      </div>

      <Footer />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

