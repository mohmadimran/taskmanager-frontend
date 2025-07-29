import React, { useState, useEffect } from 'react';
import {
  Dialog, DialogTitle, DialogContent, DialogActions,
  Button, TextField, Stack
} from '@mui/material';

const TaskModal = ({ open, onClose, onSave, initialData }) => {
  const [form, setForm] = useState({ title: '', description: '', deadline: '' });
  const [file, setFile] = useState(null);

  useEffect(() => {
    if (initialData) {
      setForm({
        title: initialData.title,
        description: initialData.description,
        deadline: initialData.deadline?.split('T')[0],
      });
    } else {
      setForm({ title: '', description: '', deadline: '' });
    }
  }, [initialData]);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = () => {
    const data = new FormData();
    Object.entries(form).forEach(([key, val]) => data.append(key, val));
    if (file) data.append('linkedFile', file);
    onSave(data);
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{initialData ? 'Edit Task' : 'Add Task'}</DialogTitle>
      <DialogContent>
        <Stack spacing={2} sx={{ mt: 1 }}>
          <TextField label="Title" name="title" value={form.title} onChange={handleChange} fullWidth required />
          <TextField label="Description" name="description" value={form.description} onChange={handleChange} fullWidth multiline rows={3} />
          <TextField type="date" name="deadline" value={form.deadline} onChange={handleChange} fullWidth />
          <Button variant="outlined" component="label"> Upload PDF
            <input hidden type="file" accept="application/pdf" onChange={(e) => setFile(e.target.files[0])} />
          </Button>
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleSubmit} variant="contained">Save</Button>
      </DialogActions>
    </Dialog>
  );
};

export default TaskModal;
