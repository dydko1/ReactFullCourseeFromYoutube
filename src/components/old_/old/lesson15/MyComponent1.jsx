import React, { useState } from "react"

function MyComponent1() {

    const [foods, setFoods] = useState(["Apple", "Banana", "Cherry", "fds"]);

    const handeleAddFood = () => {
        const newFood = document.getElementById("foodInput").value;
        document.getElementById("foodInput").value = "";
        setFoods([...foods, newFood]);
    }

    function handeleRemoveFood (index) {
        setFoods(foods.filter((_, i)=> i !== index));
        //setFoods([...foods.filter((f) => f !== e.target.value)]);
    }

    return (<div><h2>List of foods</h2>
        <ul>
            {foods.map((food, index) =>
                <li key={index} onClick={() => { handeleRemoveFood(index) }}> {food}</li>)}
        </ul>
        <input type="text" id="foodInput" placeholder="Enter food name" />
        <button onClick={handeleAddFood}>Add food</button>
    </div>)
}
export default MyComponent1