import React, { useState } from "react";

const NewBoxForm = ({ addBox }) => {
    const INITIAL_STATE = { height: 25, width: 25, backgroundColor: "ivory" }
    const [formData, setFormData] = useState(INITIAL_STATE)

    const handleChange = evt => {
        const { name, value } = evt.target
        setFormData(formData =>({
            ...formData,
            [name]: value
        }))
    }
    const handleSubmit = evt => {
        evt.preventDefault();
        addBox(formData);
        setFormData(INITIAL_STATE);
    }
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="height">Height: </label>
            <input id="height"
                type="number"
                name="height"
                value={formData.name}
                onChange={handleChange}
                placeholder={formData.name} />
            <label htmlFor="width">Width: </label>
            <input id="width"
                type="number"
                name="width"
                value={formData.name}
                onChange={handleChange}
                placeholder={formData.name} />
            <label htmlFor="backgroundColor">Background Color: </label>
            <input id="backgroundColor"
                name="backgroundColor"
                value={formData.name}
                onChange={handleChange} />

            <button>Add A Box!</button>
        </form>
    )
}

export default NewBoxForm;
