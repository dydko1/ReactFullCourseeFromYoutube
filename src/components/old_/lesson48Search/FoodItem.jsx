import PropTypes from 'prop-types';

export default function FoodItem({ food, setFoodId }) {

    const handleRecipie = () => {
        console.log("View Recipie:" + food.title + ": " + food.id);
        setFoodId(food.id);
    }

    return (
        <div>
            <img src={food.image} alt={food.title} />
            <h1>{food.title}</h1>
            <button onClick={handleRecipie}>View Recipe 🎂</button>
        </div>
    );
}

FoodItem.propTypes = {
    food: PropTypes.object.isRequired
};