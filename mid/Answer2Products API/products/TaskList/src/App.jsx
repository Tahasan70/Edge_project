import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  Card,
  CardContent,
} from "@mui/material";
import TaskCard from "./components/TaskCard";

function App() {
  const [tasks, setTasks] = useState([]);
  const [taskName, setTaskName] = useState("");
  const [dueDate, setDueDate] = useState("");

  // Add new task
  const handleAddTask = () => {
    if (!taskName || !dueDate) {
      alert("Please provide both task name and due date.");
      return;
    }
    const newTask = { taskName, dueDate };
    setTasks([...tasks, newTask]);
    setTaskName("");
    setDueDate("");
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        padding: 3,
        backgroundColor: "#a4d4e0",
      }}
    >
      {/* Header */}
      <Typography variant="h4" component="h1" gutterBottom>
        Task List Application
      </Typography>

      {/* Add Task Form */}
      <Box
        sx={{
          display: "flex",
          gap: 2,
          marginBottom: 4,
          width: "100%",
          maxWidth: 600,
        }}
      >
        <TextField
          label="Task Name"
          variant="outlined"
          fullWidth
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
        <TextField
          label="Due Date"
          type="date"
          variant="outlined"
          fullWidth
          InputLabelProps={{ shrink: true }}
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleAddTask}
          sx={{ whiteSpace: "nowrap",
            width: "100%"
           }}

        >
          Add Task
        </Button>
      </Box>

      {/* Conditional Rendering */}
      {tasks.length === 0 ? (
        <Card
          variant="outlined"
          sx={{
            width: "100%",
            maxWidth: 600,
            textAlign: "center",
            padding: 3,
            backgroundColor: "#e3f2fd",
          }}
        >
          <CardContent>
            <Typography variant="h6" color="text.secondary">
              No tasks available!
            </Typography>
          </CardContent>
        </Card>
      ) : (
        <Grid container spacing={2} sx={{ width: "100%", maxWidth: 600 }}>
          {tasks.map((task, index) => (
            <Grid item xs={12} key={index}>
              <TaskCard taskName={task.taskName} dueDate={task.dueDate} />
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
}

export default App;
