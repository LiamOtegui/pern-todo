import React, { useState, useEffect } from "react";

const ListTodo = () => {

    const [todos, setTodos] = useState([])

    const getTodos = async () => {
        try {
            const response = await fetch("http://localhost:5000/todos", {
                method: "GET",
                headers: { "Content-type": "application/json" }
            })
            const jsonData = await response.json()
            setTodos(jsonData)
        } catch (error) {
            console.error(error.message);
        }
    }
    
    const deleteTodo = async (id) => {
        try {
            const deleted = await fetch(`http://localhost:5000/todos/${id}`, {
                method: "DELETE"
            })
            setTodos(todos.filter(todo => todo.todo_id !== id))
        } catch (error) {
            console.error(error.message);
        }
    }

    // useEffect va a hacer una request fetch a la restfulapi (server) con la funcion getTodos cada vez que se agregue (post) otro "todo".
    useEffect(() => {
        getTodos()
    }, [])

    return (
        <div className="mt-10 bg-cyan-400 p-1 rounded-[3rem] mx-[8rem]">
            <div className="text-[1rem] mt- mb-10 mx-[1rem] p-8">
                <div className="flex flex-wrap justify-center">
                    {
                        todos.map((todo) => (
                            <div key={todo.todo_id} className="flex justify-center mx-5 my-5 p-[1rem] border border-cyan-500 text-center rounded-lg shadow-xl bg-cyan-300">
                                <div className="flex items-center">{todo.description}</div>
                                <button className="flex items-center ml-4 bg-cyan-500 rounded-[0.3rem] text-cyan-200 p-[1rem]">Edit</button>
                                <button className="flex items-center ml-4 bg-cyan-500 rounded-[0.3rem] text-cyan-200 p-[1rem]" onClick={() => deleteTodo(todo.todo_id)}>Delete</button>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )

}

export default ListTodo