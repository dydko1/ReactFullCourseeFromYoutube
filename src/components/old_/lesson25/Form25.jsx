import { useState } from "react";
// import React from "react";

export default function Form25() {

    const [name, setName] = useState({ firstName: "", lastName: "" });

    const handleSubmitInput = (e) => {
        setName({ ...name, firstName: e.target.value });
    }

    const handleSubmitInput2 = (e) => {
        setName({ ...name, lastName: e.target.value });
    }

    const handleSubmit = (e) => {
        console.log(name)
        e.preventDefault();
    }

    return (
        <>
            <div>
                <h1>first name is: {name.firstName} Second name is: {name.lastName}</h1>
            </div>
            <form>
                <input id="name" type="text" value={name.firstName} onChange={handleSubmitInput} />
                <input id="lastName" type="text" value={name.lastNam} onChange={handleSubmitInput2} />
                <button onClick={(e) => handleSubmit(e)}>Submit</button>
            </form >
        </>
    )
}