import { useState } from "react"
import ToDoItem from "./TodoItem";

export default function Form() {
    const [todo, setTodo] = useState("");
    const [todos, setTodos] = useState([]);

    const handleTodoChange = (e) => {
        setTodo(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setTodos([...todos, todo]);
        setTodo("");
        console.log(todos);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={handleTodoChange} type="text" value={todo} />
                <button type="submit">Submit</button>
            </form>
            {todos.map((item, index) => (<ToDoItem key={index} todo={item} todos={todos} setTodos={setTodos} />))}
        </div>
    )
}