import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { createTask, getTask, updateTask } from '../../services/tasks.js';

const TaskForm = () => {
    const [task, setTask] = useState({
        title: '',
        description: '',
        completed: false
    });
    const {id} = useParams();
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (id) {
            const fetchTask = async () => {
                try {
                    const res = await getTask(id);
                    setTask(res.data);
                } catch (error) {
                    console.error("Error fetching task:", error);
                }
            };
            fetchTask();

        }
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            if (id) {
                await updateTask(id, task);
            } else {
                await createTask(task);
            }
        } catch (error) {
            console.error("Error saving task:", error);
        } finally {
            setLoading(false);
        }
        navigate("/");
    }

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setTask(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="title">Título</label>
                <input
                    type="text"
                    name="title"
                    value={task.title}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="description">Descripción</label>
                <textarea
                    name="description"
                    value={task.description}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>
                    <input
                        type="checkbox"
                        name="completed"
                        checked={task.completed}
                        onChange={handleChange}
                    />
                </label>
            </div>
            <button
                type="submit"
                disabled={loading}
            >
                {loading ? 'Guardando...' : id ? 'Actualizar' : 'Crear'}
            </button>
        </form>
    );
}

export default TaskForm;
