import { useEffect, useState } from 'react';
import { Container, Typography, Button } from '@mui/material';
import TaskTable from './components/TaskTable';
import TaskModal from './components/TaskModal';
import {
  fetchTasks, createTask, updateTask, deleteTask, markDone
} from './api/taskApi';

function App() {
  const [tasks, setTasks] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [editTask, setEditTask] = useState(null);

  const loadTasks = async () => {
    const res = await fetchTasks();
    setTasks(res.data);
  };

  const handleSave = async (formData) => {
    if (editTask) await updateTask(editTask._id, formData);
    else await createTask(formData);
    setOpenModal(false);
    setEditTask(null);
    loadTasks();
  };

  const handleDelete = async (id) => {
    await deleteTask(id);
    loadTasks();
  };

  const handleDone = async (id) => {
    await markDone(id);
    loadTasks();
  };

  useEffect(() => { loadTasks(); }, []);

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>Task Manager</Typography>
      <Button variant="contained" onClick={() => setOpenModal(true)}>Add Task</Button>
      <TaskTable tasks={tasks} onEdit={setEditTask} onDelete={handleDelete} onMarkDone={handleDone} />
      <TaskModal open={openModal || !!editTask} onClose={() => { setOpenModal(false); setEditTask(null); }} onSave={handleSave} initialData={editTask} />
    </Container>
  );
}

export default App;
