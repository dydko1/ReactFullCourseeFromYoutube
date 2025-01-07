import PropTypes from 'prop-types';
import ToDoItem from "./TodoItem";

export default function ToDoList({ todos, setTodos }) {
    return (
        <div>
            {todos.map((item, index) => (<ToDoItem key={index} todo={item} todos={todos} setTodos={setTodos} />))}
        </div>
    );
}

ToDoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object).isRequired,
    setTodos: PropTypes.func.isRequired
};