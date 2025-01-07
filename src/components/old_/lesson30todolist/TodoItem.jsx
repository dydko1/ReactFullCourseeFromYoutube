import PropTypes from 'prop-types';

export default function ToDoItem({ todo, todos, setTodos }) {

    const handleDelete = (n) => {
        console.log("Delete button", n);
        setTodos(todos.filter((t) => t !== n));
    }

    return (
        <div>
            <div>TodoItem: {todo}</div>
            <span>
                <button onClick={() => handleDelete(todo)}>Delete</button>
            </span>
        </div>
    )
}

ToDoItem.propTypes = {
    todo: PropTypes.string.isRequired,// or PropTypes.any.isRequired if todo can be any type
    todos: PropTypes.array.isRequired,
    setTodos: PropTypes.func.isRequired
}
