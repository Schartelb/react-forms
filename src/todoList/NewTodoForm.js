import React, { useState } from "react";

const NewTodoForm = ({ addToDo }) => {
    const [formData, setFormData] = useState("")

    const handleChange = evt => {
        const { value } = evt.target
        setFormData(value)
    }
    const handleSubmit = evt => {
        evt.preventDefault();
        addToDo(formData);
        setFormData("");
    }
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="Todo">To Do: </label>
            <input id="Todo"
                type="text"
                name="Todo"
                value={formData.value}
                onChange={handleChange}
                placeholder="Things to do" />
            <button>Add A To Do!</button>
        </form>
    )
}

export default NewTodoForm