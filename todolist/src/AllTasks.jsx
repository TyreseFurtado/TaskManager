import React from 'react';
import './AllTasks.css'
import { useNavigate } from 'react-router-dom';
import TaskForm from './taskForm';


function AllTasks({ tasks, onDelete }) {

    const [openIndex, setOpenIndex] = React.useState(null);

    const nav = useNavigate()

    const navigate = () => {
        nav('/')
    }

    const handleEdit = () => {

    }


    return (
        <div className="AllTasksPage">
            <header className="header">
                <div className="header-center">
                    <ul className='tsk-links'>
                        <li onClick={navigate}>Home</li>
                        <li>Pending</li>
                        <li>In Progress</li>
                        <li>Completed</li>
                    </ul>
                </div>
            </header>
            {tasks.length === 0 ? (
                <p>No tasks yet. Go create one!</p>
            ) : (
                <ul className="task-list">
                    {tasks.map((task, index) => (
                        <li key={index} className="task-card">
                            <h2 className="task-title">{task.title}</h2>
                            <p className="task-desc">{task.description}</p>
                            <p className="task-meta">
                                Status: {task.status} | Due: {task.dueDate}
                            </p>
                            <button className="options-btn" onClick={() => setOpenIndex(openIndex === index ? null : index)}> ⋮</button>
                            <div className={`options-menu ${openIndex === index ? "show" : ""}`}>
                                <button onClick={() => handleEdit(task)}>Edit</button>
                                <button onClick={() => onDelete(index)}>Delete</button>
                            </div>

                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}



export default AllTasks