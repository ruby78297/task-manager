import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addTask,
  deleteTask,
} from '../Redux/features/taskSlice';
import {
  Button,
  TextField,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';

const Dashboard = () => {
  const [task, setTask] = useState('');
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.tasks);

  const handleAddTask = () => {
    if (task.trim()) {
      dispatch(addTask({ id: Date.now(), text: task }));
      setTask('');
    }
  };

  return (
    <div>
      <h2>Task List</h2>
      <TextField
        label='New Task'
        variant='outlined'
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <Button variant='contained' onClick={handleAddTask}>
        Add Task
      </Button>
      <List>
        {tasks.map((task) => (
          <ListItem key={task.id}>
            <ListItemText primary={task.text} />
            <Button
              color='secondary'
              onClick={() => dispatch(deleteTask(task.id))}
            >
              Delete
            </Button>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default Dashboard;
