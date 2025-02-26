import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

const TaskCard = ({ taskName, dueDate }) => {
  return (
    <Card variant="outlined" sx={{ marginBottom: 2 }}>
      <CardContent>
        <Typography variant="h6" component="div">
          {taskName}
        </Typography>
        <Typography color="text.secondary">
          Due Date: {dueDate}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default TaskCard;
