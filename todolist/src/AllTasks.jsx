import React from 'react';
import './AllTasks.css'
import { useNavigate } from 'react-router-dom';


function AllTasks({ tasks }) {

    const nav = useNavigate()

    const navigate = () => {
        nav('/')
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
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}



export default AllTasks