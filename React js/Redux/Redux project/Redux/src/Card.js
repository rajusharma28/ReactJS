import { useState } from "react";
import FoodCart from "./FoodCart";

const foodItem = [
  { id: 1, food: "Pizza", price: 200, rating: 4.5, category: "Fast Food" },
  { id: 2, food: "Burger", price: 120, rating: 4.2, category: "Fast Food" },
  { id: 3, food: "Dosa", price: 80, rating: 4.7, category: "South Indian" },

  { id: 9, food: "Masala Chai", price: 40, rating: 4.9, category: "Beverage" },
  { id: 10, food: "Chicken Wings", price: 150, rating: 4.2, category: "Fast Food" },

  { id: 17, food: "Dal Makhani", price: 160, rating: 4.7, category: "Indian" },
  { id: 18, food: "Chocolate Cake", price: 120, rating: 4.9, category: "Dessert" },
  { id: 19, food: "Cold Coffee", price: 90, rating: 4.5, category: "Beverage" },
  { id: 20, food: "Sandwich", price: 70, rating: 4.2, category: "Fast Food" }
];


export default function Card() {

 
  return (
    <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "10px" }}>
      {foodItem.map((value) => (
        <div key={value.id}>
         {/* <FoodCart value={value}/> */}

         <FoodCart value={value}></FoodCart>
        
        </div>
      ))}
    </div>
  );
}
