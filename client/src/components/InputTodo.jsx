import React, { useState } from 'react'

const InputTodo = () => {

    const [description, setDescription] = useState('')

    const onSubmitForm = async (event) => {
        try {
            const body = { description }
            const newTodo = await fetch('http://localhost:5000/todos', {
                method: 'POST',
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify(body)
            })
            window.location = '/'
        } catch (error) {
            console.error(error.message);
        }
    }

    return (
        <div>
            <h1 className='text-center mt-5'>Pern Todo List</h1>
            <form className='d-flex mt-4 justify-content-center' onSubmit={onSubmitForm}>
                <input type='text' className='form-control col-2' value={description} onChange={event => setDescription(event.target.value)}/>
                <button className='btn btn-success ml-1'>Add</button>
            </form>
        </div>
    )
}

export default InputTodo
