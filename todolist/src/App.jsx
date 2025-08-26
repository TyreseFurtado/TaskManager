import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
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
            <li>All Tasks</li>
            <li>Pending</li>
            <li>Completed</li>
          </ul>
        </div>

      </header>

      {showForm && (
        <div className='form-overlay'>
          <form className="form-container" onSubmit={handleSubmit}>
            <h2> Create Task</h2>

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
              Priority:
              <select
                name="priority"
                value={formData.priority}
                onChange={handleChange}
                required
              >
                <option value="">Select Priority</option>
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
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
              <button type="submit" className="cancel-btn" onClick={() => setShowForm(false)}>Cancel</button>
              <button type="submit" className="save-btn">Save</button>
            </div>
          </form>
        </div>

      )
      }
    </div>
  )
}
export default App
