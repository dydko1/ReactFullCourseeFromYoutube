import PropTypes from 'prop-types';
import FoodItem from './FoodItem';

export default function FoodList({ foodData, foodId, setFoodId }) {
    return (
        <div>
            {foodData.map((f) => (
                <FoodItem setFoodId={setFoodId} key={f.id} food={f} />
            ))}
        </div>
    );
}

FoodList.propTypes = {
    foodData: PropTypes.arrayOf(PropTypes.object).isRequired,
};