import { useState } from "react";

function FoodCart({ food, price, category }) {
  const [InCart, setInCart] = useState(false);

  function handleClick() {
    setInCart(!InCart);
  }

  return (
    <div style={{
      border: "1px solid gray",
      padding: "10px",
      borderRadius: "8px",
      margin: "10px",
      width: "150px",
      textAlign: "center"
    }}>
      <h1>{food}</h1>
      <h2>₹{price}</h2>
      <h3>{category}</h3>

      <button onClick={handleClick}>
        {InCart ? "Remove" : "Add"}
      </button>
    </div>
  );
}

export default FoodCart;
