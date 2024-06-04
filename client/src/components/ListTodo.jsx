import React, { useState, useEffect } from 'react'

const ListTodo = () => {

    const [todos, setTodos] = useState([])

    const getAllTodos = async () => {
        try {
            const response = await fetch('http://localhost:5000/todos', {
                method: 'GET'
            })
            const jsonData = await response.json()
            setTodos(jsonData)
        } catch (error) {
            console.error(error.message);
        }
    }

    useEffect(() => {
        getAllTodos()
    }, [])

    const deleteFunction = async (id) => {
        try {
            const deletedTodo = await fetch(`http://localhost:5000/todos/${id}`, {
                method: 'DELETE'
            })
            setTodos(todos.filter(todo => todo.todo_id !== id))
        } catch (error) {
            console.error(error.message);
        }
    }

    return (
        <div>
            {todos.map(todo => {
                return (
                    <div key={todo.todo_id}>
                        {todo.description}
                        <button onClick={() => deleteFunction(todo.todo_id)}>Delete</button>
                    </div>
                )
            })}
        </div>
    )
}

export default ListTodo