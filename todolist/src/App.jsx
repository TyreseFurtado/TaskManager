import React from 'react'
import Home from './Home.jsx'
import AllTasks from './AllTasks.jsx'
import { Routes, Route } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'


function App() {

    return (

        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/AllTasks' element={<AllTasks />} />
        </Routes>

    )

}

export default App;