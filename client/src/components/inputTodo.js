import React, { useState } from "react"
import "../App.css"

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
        <>
            <h1 className="text-center mt-5 font-bold text-[2rem]">Pern todo list</h1>

            <form className="flex justify-center mt-3" onSubmit={onSubmitForm}>
                <input
                type="text"
                className="text borderborder-gray-500 rounded-md shadow w-[20rem] h-[2rem] py-[1.3rem] px-[1rem]"
                value={description}
                onChange={event => setDescription(event.target.value)} />
                <button
                className="border border-green-300 bg-green-300 w-[3rem] ml-[1rem] rounded-md">Add</button>
            </form>

        </>
    )

}

export default InputTodo;