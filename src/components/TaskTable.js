import {
  Table, TableHead, TableRow, TableCell, TableBody,
  IconButton, Typography
} from '@mui/material';
import {
  Delete, Edit, CloudDownload, Visibility, CheckCircle
} from '@mui/icons-material';
import { getTaskStatus } from '../utils/statusUtils';

const TaskTable = ({ tasks, onEdit, onDelete, onMarkDone }) => {
  if (!tasks.length) return <Typography variant="h6" sx={{ mt: 3 }}>No tasks found.</Typography>;

  return (
    <Table sx={{ mt: 2 }}>
      <TableHead>
        <TableRow>
          <TableCell>Title</TableCell>
          <TableCell>Description</TableCell>
          <TableCell>Deadline</TableCell>
          <TableCell>Status</TableCell>
          <TableCell>Actions</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {tasks.map(task => (
          <TableRow key={task._id}>
            <TableCell>{task.title}</TableCell>
            <TableCell>{task.description}</TableCell>
            <TableCell>{task.deadline?.split('T')[0]}</TableCell>
            <TableCell>{getTaskStatus(task)}</TableCell>
            <TableCell>
              <IconButton onClick={() => onMarkDone(task._id)}><CheckCircle /></IconButton>
              {task.linkedFile && (
                <>
                  <IconButton href={`http://localhost:8082/uploads/${task.linkedFile}`} target="_blank" rel="noreferrer"><Visibility /></IconButton>
                  <IconButton href={`http://localhost:8082/uploads/${task.linkedFile}`} download><CloudDownload /></IconButton>
                </>
              )}
              <IconButton onClick={() => onEdit(task)}><Edit /></IconButton>
              <IconButton onClick={() => onDelete(task._id)}><Delete /></IconButton>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default TaskTable;
