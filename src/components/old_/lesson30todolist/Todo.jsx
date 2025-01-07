import { useState } from "react"
import Form from "./Form";
import ToDoList from "./TodoList";

export default function Todo() {

    const [todos, setTodos] = useState([]);

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     setTodos([...todos, todo]);;
    //     console.log(todos);
    // }

    return (
        <div>
            <Form todos={todos} setTodos={setTodos} />
            <ToDoList todos={todos} setTodos={setTodos} />
        </div>
    )
}