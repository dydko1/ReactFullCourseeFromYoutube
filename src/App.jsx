import { useState } from "react";
import Search from "./components/old_/lesson48Search/Search"
import FoodList from "./components/old_/lesson48Search/foodList";
import Nav from "./components/old_/lesson48Search/Nav";
import InnerContainer from "./components/old_/lesson48Search/Container";
import FoodDetails from "./components/old_/lesson48Search/FoodDetails";

function App() {
  const [foodData, setFoodData] = useState([]);
  const [foodId, setFoodId] = useState("");

  return (
    <div className="App">
      <Nav />
      <InnerContainer>
        <FoodDetails foodId={foodId} />
      </InnerContainer>
      <InnerContainer foodData={foodData}>
        <Search foodData={foodData} setFoodData={setFoodData} />
      </InnerContainer >
      <FoodList foodId={foodId} setFoodId={setFoodId} foodData={foodData} />
    </div>
  )
}

export default App
