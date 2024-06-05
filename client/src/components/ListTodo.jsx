import React, { useState, useEffect } from 'react'
import EditTodo from './EditTodo'

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
        <table className='table mt-5 text-center'>
            <thead>
                <tr>
                    <th>Description</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody className=''>
                {todos.map(todo => {
                    return (
                        <tr key={todo.todo_id}>
                            <td>{todo.description}</td>
                            <td><EditTodo todo={todo}/></td>
                            <td>
                                <button className='btn btn-danger' onClick={() => deleteFunction(todo.todo_id)}>Delete</button>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

export default ListTodo