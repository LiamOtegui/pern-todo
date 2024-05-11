import React, { useState, useEffect } from "react";

const ListTodo = () => {

    const [todos, setDescription] = useState([])

    const getTodos = async () => {
        try {
            const response = await fetch("http://localhost:5000/todos", {
                method: "GET",
                headers: { "Content-type": "application/json" }
            })
            const jsonData = await response.json()
            setDescription(jsonData)
        } catch (error) {
            console.error(error.message);
        }
    }

    // useEffect va a hacer una peticion fetch a la restfulapi (server) con la funcion getTodos cuando se renderice y actualice el componente de ListTodo.
    useEffect(() => {
        getTodos()
    }, [])

    return (
        <div className="mt-10 bg-cyan-500 p-1 rounded-[3rem] mx-[8rem]">
            <div className="flex flex-wrap justify-between text-[1.5rem] text-cyan-800">
                <div className="mt-10 mx-10 px-[8rem] py-8 bg-cyan-400 rounded-lg shadow-xl">Description</div>
                <div className="mt-10 mx-10 px-[8rem] py-8 bg-cyan-400 rounded-lg shadow-xl">Edit</div>
                <div className="mt-10 mx-10 px-[8rem] py-8 bg-cyan-400 rounded-lg shadow-xl">Delete</div>
            </div>
            <div className="text-[1rem] text-cyan-800 mt- mb-10 mx-[1rem] p-8">
                <div className="flex flex-wrap justify-center">
                    {
                        todos.map((todo) => (
                            <div key={todo.todo_id} className="flex justify-center mx-5 my-5 py-[1rem] text-center rounded-lg shadow-xl bg-cyan-300 w-[15%]">
                                <div>{todo.description}</div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )

}

export default ListTodo