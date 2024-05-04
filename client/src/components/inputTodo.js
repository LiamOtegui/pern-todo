import React, { useState } from "react";

const InputTodo = () => {

    const [description, setDescription] = useState("")

    const onSubmitForm = async event => {
        event.preventDefault()
        try {
            const body = { description }
            const response = await fetch("http://localhost:5000/todos", {
                method: "POST",
                headers: {"Content-type": "application/json"},
                body: JSON.stringify(body)
            })
            console.log(response);
        } catch (error) {
            console.error(error.message);
        }
    }

    return (
        <div>
            <h1 className="text-center mt-8 text-3xl font-bold">
                Pern Todo List
            </h1>
            <form className="text-center" onSubmit={onSubmitForm}>
                <input
                type="text"
                className="appearance-none border rounded mt-[1.5rem] py-2 px-[5rem] text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={description}
                onChange={event => setDescription(event.target.value)}/>
                <button className="bg-green-500 p-[0.4rem] rounded-sm ml-1">
                    Add
                </button>
            </form>
        </div>
    )
}

export default InputTodo;