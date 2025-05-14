import NavBar from './components/nav/NavBar.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import TaskList from './components/taskList/TaskList.jsx'
import TaskForm from './components/taskForm/TaskForm.jsx'
import './App.css'

function App() {

  return (
    <BrowserRouter>
      <NavBar />
      <div className="container">
        <h1>Gestor de tareas</h1>
        <Routes>
          <Route path="/" element={<TaskList />} />
          <Route path="/create" element={<TaskForm />} />
          <Route path="/edit/:id" element={<TaskForm />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
