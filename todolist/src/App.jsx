import React from 'react'
import Home from './Home.jsx'
import AllTasks from './AllTasks.jsx'
import { Routes, Route } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'


function App() {
    const [tasks, setTasks] = useState(() => {
        const savedTasks = localStorage.getItem('tasks');
        return savedTasks ? JSON.parse(savedTasks) : [];
    });

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    const handleDeleteTask = (index) => {
        setTasks(prevTasks => prevTasks.filter((_, i) => i !== index));
    };

    const handleUpdateTask = (updatedTask, index) => {
        setTasks((prevTasks) =>
            prevTasks.map((t, i) => (i === index ? updatedTask : t))
        );
    };



    return (
            <Routes>
                <Route path="/" element={<Home tasks={tasks} setTasks={setTasks} />} />
                <Route path="/AllTasks" element={<AllTasks tasks={tasks} onUpdate={handleUpdateTask} onDelete={handleDeleteTask} />} />
            </Routes>

    )

}

export default App;