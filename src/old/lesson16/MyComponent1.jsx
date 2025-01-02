import React, { useState } from "react";

function MyComponent1() {

    const [cars, setCars] = useState([]);
    const [carYears, setCarYears] = useState(new Date().getFullYear());
    const [carMake, setCarMake] = useState("");
    const [carModel, setCarModel] = useState("");

    function handleAddCar() {

        const newCar = {
            year: carYears,
            make: carMake,
            model: carModel
        };

        setCars(c => [...c, newCar]);

        setCarYears(new Date().getFullYear());
        setCarMake("");
        setCarModel("");
    }

    const handleRemoveCar = (index) => {
        setCars(c => c.filter((_, i) => i !== index));
    }

    const handleYearChange = (e) => {
        setCarYears(e.target.value);

    }

    const handleMakeChange = (e) => {
        setCarMake(e.target.value);

    }

    const handleModelChange = (e) => {
        setCarModel(e.target.value);
    }

    return (
        <div>
            <h2>List of car object</h2>
            <ul>
                {cars.map((car, index) =>
                    <li key={index} onClick={() => { handleRemoveCar(index) }}>
                        {car.year} {car.make} {car.model}
                    </li>)}
            </ul>
            <input type="number" value={carYears} onChange={handleYearChange} />
            <p />
            <input type="text" value={carMake} onChange={handleMakeChange}
                placeholder="Enter car make" />
            <p />
            <input type="text" value={carModel} onChange={handleModelChange}
                placeholder="Enter car model" />
            <p />
            <button onClick={handleAddCar}>Add car</button>
        </div>
    );
}

export default MyComponent1;  