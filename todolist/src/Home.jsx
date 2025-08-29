import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './Home.css'
import TaskForm from './taskForm.jsx'
import { useNavigate } from 'react-router-dom'

function Home() {
  const [tasks, setTasks] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    priority: "",
    dueDate: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTasks([...tasks, formData]);
    setFormData({ title: "", description: "", priority: "", dueDate: "" });
    setShowForm(false);
  };

  const handleRemove = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const nav = useNavigate()

  const navigate = () => {
    nav('/AllTasks')
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <header className="header">
        <div className="header-left">
          <span className="header-text">Task Manager</span>
        </div>
        <div className="header-right">
          <button className="btn" onClick={() => setShowForm(true)}>
            Create Task
          </button>
        </div>

        <div className="header-center">
          <ul className='tsk-links'>
            <li onClick={navigate}>All Tasks</li>
            <li>Pending</li>
            <li>Completed</li>
          </ul>
        </div>

      </header>

      {showForm && (
        <TaskForm
          onSubmit={(newTask) => {
            setTasks([...tasks, newTask]);
            setShowForm(false);
          }}
          onCancel={() => setShowForm(false)}
        />
      )}


    </div>
  )
}
export default Home;
