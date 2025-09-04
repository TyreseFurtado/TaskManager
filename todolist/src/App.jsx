import React from 'react'
import Home from './Home.jsx'
import AllTasks from './AllTasks.jsx'
import { Routes, Route } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import { useState } from 'react'


function App() {
    const [tasks, setTasks] = useState([]);

    const handleDeleteTask = (index) => {
        setTasks(prevTasks => prevTasks.filter((_, i) => i !== index));
    };

    const handleUpdateTask = (updatedTask, index) => {
        setTasks((prevTasks) =>
            prevTasks.map((t, i) => (i === index ? updatedTask : t))
        );
    };

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home tasks={tasks} setTasks={setTasks} />} />
                <Route path="/AllTasks" element={<AllTasks tasks={tasks} onUpdate={handleUpdateTask} onDelete={handleDeleteTask} />} />
            </Routes>
        </BrowserRouter>

    )

}

export default App;