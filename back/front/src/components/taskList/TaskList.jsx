import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {getTasks, deleteTask} from "../../services/tasks.js";


const TaskList = () => {
    
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchTasks();
    }, [])

    const fetchTasks = async () => {
        try {
            const res = await getTasks();
            setTasks(res.data);
            setLoading(false);
        } catch (error) {
            console.error("Error fetching tasks:", error);
            setLoading(false);
        }
    }

    const handleDelete = async (id) => {
        try {
            await deleteTask(id);
            fetchTasks();
        } catch (error) {
            console.error("Error deleting task:", error);
        }
    }

    if (loading) return <div>Loading...</div>;
    if (tasks.length === 0) {
        return (
            <>
            <div>No tasks available</div>
            <Link to="/create" className="btn btn-primary">Tarea nueva</Link>
            </>
        );
    } 


  return (
    <div>
      <Link to="/create" className="btn btn-primary">Tarea nueva</Link>
      <div className="task-list">
        {tasks.map((task) => (
            <div key={task.id} className="task-item">
                <h3>{task.title}</h3>
                <p>{task.description}</p>
                <p>{task.date}</p>
                <span> {task.completed ? "Completada" : 'Pendiente'}</span>
                <div className="task-actions">
                <Link to={`/edit/${task.id}`}>Editar</Link>
                <button onClick={() => handleDelete(task.id)}>Eliminar</button>
                </div>
            </div>
        ))}
      </div>
    </div>
  );
}

export default TaskList;
