import React, { useState, useEffect } from "react";
import "./FoodBox.css";
function FoodBox({ food }) {
  const [quantity, setQuantity] = useState(0);
  const [caloryValue, setCaloryValue] = useState(0);
  const handleQuantityChange = (event) => {
    setQuantity(Number(event.target.value));
  };
  const handleClick = () => {
    setQuantity((prevQuantity) => Number(prevQuantity) + 1);
  };
  useEffect(() => {
    setCaloryValue(food.cal * quantity);
  }, [quantity, food.cal]);

  const handleReset = () => {
    setQuantity(0);
  };

  return (
    <div className="box">
      <div className="media">
        <div className="media-left">
          <div className="image is-64x64">
            <img src={food.img} alt={food.name} />
          </div>
        </div>
        <div className="media-content">
          <div className="content">
            <p>
              <strong>{food.name}</strong> <br />
              <small>{food.cal} cal</small>
            </p>
          </div>
        </div>
        <div className="media-right">
          <div className="field has-addons">
            <div className="control">
              <input
                className="input"
                type="number"
                value={quantity}
                onChange={handleQuantityChange}
                placeholder="Enter a number hear"
              />
            </div>
            <div className="control">
              <button onClick={handleClick} className="button is-info">
                +
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="calories">
        <div className="cal-text">
          <strong>
            {quantity}
            <span></span>
            {food.name} = {caloryValue} calories
          </strong>
        </div>

        <button className="reset-button" onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default FoodBox;
