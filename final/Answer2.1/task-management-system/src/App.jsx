import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Button,
  Select,
  MenuItem,
  Snackbar,
  IconButton,
  Paper,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [formValues, setFormValues] = useState({
    name: '',
    category: '',
    priority: '',
    dueDate: '',
  });
  const [searchTerm, setSearchTerm] = useState('');
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (
      !formValues.name ||
      !formValues.category ||
      !formValues.priority ||
      !formValues.dueDate
    ) {
      return;
    }
    setTasks([...tasks, { ...formValues, id: Date.now() }]);
    setFormValues({ name: '', category: '', priority: '', dueDate: '' });
  };

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
    setSnackbarOpen(true);
  };

  const filteredTasks = tasks.filter((task) =>
    task.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const isDueSoon = (dueDate) => {
    const due = new Date(dueDate);
    const today = new Date();
    const diff = (due - today) / (1000 * 60 * 60 * 24);
    return diff <= 2;
  };

  return (
    <div className="app-container">
      {/* Dynamic Form */}
      <form onSubmit={handleFormSubmit} className="task-form">
        <TextField
          label="Task Name"
          name="name"
          value={formValues.name}
          onChange={handleInputChange}
          required
          style={{ marginRight: '10px' }}
        />
        <Select
          name="category"
          value={formValues.category}
          onChange={handleInputChange}
          displayEmpty
          required
          style={{ marginRight: '10px', minWidth: '120px' }}
        >
          <MenuItem value="" disabled>
            Select Category
          </MenuItem>
          <MenuItem value="Work">Work</MenuItem>
          <MenuItem value="Personal">Personal</MenuItem>
          <MenuItem value="Miscellaneous">Miscellaneous</MenuItem>
        </Select>
        <Select
          name="priority"
          value={formValues.priority}
          onChange={handleInputChange}
          displayEmpty
          required
          style={{ marginRight: '10px', minWidth: '120px' }}
        >
          <MenuItem value="" disabled>
            Select Priority
          </MenuItem>
          <MenuItem value="High">High</MenuItem>
          <MenuItem value="Medium">Medium</MenuItem>
          <MenuItem value="Low">Low</MenuItem>
        </Select>
        <TextField
          label="Due Date"
          name="dueDate"
          type="date"
          InputLabelProps={{ shrink: true }}
          value={formValues.dueDate}
          onChange={handleInputChange}
          required
          style={{ marginRight: '10px' }}
        />
        <Button type="submit" variant="contained" color="primary">
          Add Task
        </Button>
      </form>

      {/* Search Bar */}
      <TextField
        label="Search Task"
        variant="outlined"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        fullWidth
        style={{ marginBottom: '20px' }}
      />

      {/* Task Table */}
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Task Name</TableCell>
              <TableCell>Category</TableCell>
              <TableCell>Priority</TableCell>
              <TableCell>Due Date</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredTasks.map((task) => (
              <TableRow
                key={task.id}
                style={
                  isDueSoon(task.dueDate)
                    ? { backgroundColor: '#b0c9e8' }
                    : {}
                }
              >
                <TableCell>{task.name}</TableCell>
                <TableCell>{task.category}</TableCell>
                <TableCell>{task.priority}</TableCell>
                <TableCell>{task.dueDate}</TableCell>
                <TableCell>
                  <IconButton
                    onClick={() => handleDeleteTask(task.id)}
                    color="error"
                  >
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Snackbar */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={() => setSnackbarOpen(false)}
        message="Task deleted successfully"
      />
    </div>
  );
};

export default App;
