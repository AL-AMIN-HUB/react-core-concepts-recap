import React from "react";
import "./Cosmetic.css";

const Cosmetic = (props) => {
  const { id, name, price } = props.cosmetic;
  return (
    <div className="text-center cosmetic">
      <h2>Product ID: {id} </h2>
      <p> Name: {name} </p>
      <p className="lead"> Price: {price} </p>
    </div>
  );
};

export default Cosmetic;
