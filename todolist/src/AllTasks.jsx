import React from 'react';
import './AllTasks.css'
import { useNavigate } from 'react-router-dom';
import TaskForm from './taskForm';


function AllTasks({ tasks, onDelete, onUpdate }) {

    const [openIndex, setOpenIndex] = React.useState(null);
    const [editingTask, setEditingTask] = React.useState(null);
    const [filterStatus, setFilterStatus] = React.useState("");

    const nav = useNavigate()

    const navigate = () => {
        nav('/')
    }

    const handleEdit = (task, index) => {
        setEditingTask({ ...task, index })
    }

    const handleUpdate = (updatedTask) => {
        onUpdate(updatedTask, editingTask.index);
        setEditingTask(null);
    }

    const filteredTasks = filterStatus ? tasks.filter(task => task.status === filterStatus) : tasks;



    return (
        <div className="AllTasksPage">
            <header className="header">
                <div className="header-center">
                    <ul className='tsk-links'>
                        <li onClick={navigate}>Home</li>
                    </ul>
                </div>
                <div className="header-right">
                    <select className="filter-select"
                        value={filterStatus}
                        onChange={(e) => {
                            setFilterStatus(e.target.value);
                            handleFiltration(e.target.value);
                        }}
                    >
                        <option value="">Filter by Status</option>
                        <option value="Pending">Pending</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Completed">Completed</option>
                    </select>
                </div>
            </header>
            {tasks.length === 0 ? (
                <p className = "notifier">No tasks yet. Go create one!</p>
            ) : (
                <ul className="task-list">
                    {filteredTasks.map((task, index) => (
                        <li key={index} className="task-card">
                            <h2 className="task-title">{task.title}</h2>
                            <p className="task-desc">{task.description}</p>
                            <p className="task-meta">
                                Status: {task.status} | Due: {task.dueDate}
                            </p>
                            <button className="options-btn" onClick={() => setOpenIndex(openIndex === index ? null : index)}> ⋮</button>
                            <div className={`options-menu ${openIndex === index ? "show" : ""}`}>
                                <button onClick={() => handleEdit(task, index)}>Edit</button>
                                <button onClick={() => onDelete(index)}>Delete</button>
                            </div>

                        </li>
                    ))}
                </ul>
            )}

            {editingTask && (
                <TaskForm
                    initialData={editingTask}
                    onSubmit={handleUpdate}
                    onCancel={() => setEditingTask(null)}
                />
            )}
        </div>
    );
}



export default AllTasks