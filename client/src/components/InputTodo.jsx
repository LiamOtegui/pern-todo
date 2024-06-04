import React, { useState } from 'react'

const InputTodo = () => {

    const [description, setDescription] = useState('')

    const onSubmitForm = async event => {
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
            <form onSubmit={onSubmitForm}>
                <input type='text' value={description} onChange={event => setDescription(event.target.value)}/>
                <button>Add</button>
            </form>
        </div>
    )
}

export default InputTodo
