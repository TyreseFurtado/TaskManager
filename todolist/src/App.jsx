import React from 'react'
import Home from './Home.jsx'
import AllTasks from './AllTasks.jsx'
import { Routes, Route } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import { useState } from 'react'


function App() {
    const [tasks, setTasks] = useState([]);

    return (

        <Routes>
            <Route path="/" element={<Home tasks={tasks} setTasks={setTasks} />} />
            <Route path="/AllTasks" element={<AllTasks tasks={tasks} />} />
        </Routes>

    )

}

export default App;