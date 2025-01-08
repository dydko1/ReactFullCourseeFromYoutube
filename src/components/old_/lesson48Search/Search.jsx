import { useState, useEffect } from "react"
import PropTypes from 'prop-types';

const URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "3b9f7c78ad5845518ed97514aa798d42";

export default function Search({ foodData, setFoodData }) {

    const [query, setQuery] = useState("pizza");

    useEffect(() => {
        async function fetchFood() {
            const res = await fetch(`${URL}?apiKey=${API_KEY}&query=${query}`);
            const data = await res.json();
            console.log(data.results);
            setFoodData(data.results);
        }
        fetchFood();
    }, [query]);

    const handleQuery = (e) => {
        setQuery(e.target.value);
    }

    Search.propTypes = {
        foodData: PropTypes.array, // or any other type that suits your needs
        setFoodData: PropTypes.func.isRequired,
    };

    return (<div>
        <input type="text" value={query} onChange={handleQuery} />
    </div>)
}