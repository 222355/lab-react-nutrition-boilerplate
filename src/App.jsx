import { useState } from "react";
import "./App.css";
import foods from "./foods.json";
import FoodBox from "./component/FoodBox";

function App() {
  const [filterFoods, setFilterFoods] = useState(foods);

  const handleSearch = (event) => {
    const searchValue = event.target.value;
    setFilterFoods(
      foods.filter((food) => food.name.toLowerCase().includes(searchValue))
    );
  };

  return (
    <>
      <div>
        <input
          className="inputText"
          type="text"
          onChange={handleSearch}
          placeholder="Search"
        />
        {filterFoods.map((food, index) => (
          <FoodBox key={index} food={food} />
        ))}
      </div>
    </>
  );
}

export default App;
