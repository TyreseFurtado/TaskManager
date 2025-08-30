import React, { useState } from 'react';
import './taskForm.css'

function TaskForm({ onSubmit, onCancel }) {
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        status: "",
        dueDate: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
        setFormData({ title: "", description: "", status: "", dueDate: "" });
    };

    return (
        <div className='form-overlay'>
            <form className="form-container" onSubmit={handleSubmit}>
                <h2>Create Task</h2>

                <label>
                    Task Title:
                    <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        required
                    />
                </label>

                <label>
                    Description:
                    <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        required
                    ></textarea>
                </label>

                <label>
                    Status:
                    <select
                        name="status"
                        value={formData.status}
                        onChange={handleChange}
                        required
                    >
                        <option value=""></option>
                        <option value="Pending">Pending</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Completed">Completed</option>
                    </select>
                </label>

                <label>
                    Due Date:
                    <input
                        type="date"
                        name="dueDate"
                        value={formData.dueDate}
                        onChange={handleChange}
                        required
                    />
                </label>

                <div className="form-buttons">
                    <button type="button" className="cancel-btn" onClick={onCancel}>
                        Cancel
                    </button>
                    <button type="submit" className="save-btn">
                        Save
                    </button>
                </div>
            </form>
        </div>
    )
}

export default TaskForm;