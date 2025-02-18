import React from 'react';
import {
  Container,
  Grid,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Checkbox,
  Chip,
  IconButton,
  Stack,
} from '@mui/material';
import DynamicAccordion from '../assets/DynamicAccordion';
import { deepPurple, blue, green } from '@mui/material/colors';
import { DragIndicator, MoreVert } from '@mui/icons-material';

type Task = {
  id: number;
  name: string;
  dueDate: string;
  status: 'TO-DO' | 'In Progress' | 'Completed';
  category: string;
};

// Sample Task Data
const tasks: Task[] = [
  {
    id: 1,
    name: 'Interview with Design Team',
    dueDate: 'Today',
    status: 'TO-DO',
    category: 'Work',
  },
  {
    id: 2,
    name: 'Team Meeting',
    dueDate: 'Today',
    status: 'TO-DO',
    category: 'Personal',
  },
  {
    id: 3,
    name: 'Design a Dashboard page along with wireframes',
    dueDate: '31 Dec, 2024',
    status: 'TO-DO',
    category: 'Work',
  },
];

const TaskList: React.FC = () => {
  // Function to render task tables based on status
  const renderTasksTable = (
    status: 'TO-DO' | 'In Progress' | 'Completed',
    color: string
  ) => {
    const filteredTasks = tasks.filter(
      (task) => task.status === status
    );

    return (
      <TableContainer
        component={Paper}
        sx={{ borderRadius: '12px', overflow: 'hidden' }}
      >
        <Table>
          <TableBody>
            {filteredTasks.length > 0 ? (
              filteredTasks.map((task) => (
                <TableRow key={task.id}>
                  {/* Task Name */}
                  <TableCell width={'20%'}>
                    <Stack direction={'row'} alignItems='center'>
                      <Checkbox />
                      <DragIndicator
                        sx={{ color: 'gray', cursor: 'grab' }}
                      />
                      <Checkbox />
                      <Typography
                        variant='body1'
                        noWrap
                        sx={{
                          maxWidth: 300,
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                        }}
                      >
                        {task.name.length > 30
                          ? task.name.slice(0, 30) + '...'
                          : task.name}
                      </Typography>
                    </Stack>
                  </TableCell>

                  {/* Due Date */}
                  <TableCell>
                    <Typography
                      variant='body2'
                      color='text.secondary'
                    >
                      {task.dueDate}
                    </Typography>
                  </TableCell>

                  {/* Status Chip */}
                  <TableCell>
                    <Chip
                      label={task.status}
                      size='small'
                      sx={{ backgroundColor: 'gray' }}
                    />
                  </TableCell>

                  {/* Category */}
                  <TableCell>
                    <Typography variant='body2'>
                      {task.category}
                    </Typography>
                  </TableCell>

                  {/* More Options */}
                  <TableCell width={30}>
                    <IconButton size='small'>
                      <MoreVert />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={7} align='center'>
                  No tasks available
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    );
  };

  return (
    <Container maxWidth='lg' sx={{ mt: 4 }}>
      <Grid container py={4}>
        <Grid item md={4}>
          <Typography variant='h6'>Task Name</Typography>
        </Grid>
        <Grid item md={2.5}>
          <Typography variant='h6'>Due On</Typography>
        </Grid>
        <Grid item md={2.5}>
          <Typography variant='h6'>Task Status</Typography>
        </Grid>
        <Grid item md={2}>
          <Typography variant='h6'>Task Category</Typography>
        </Grid>
      </Grid>

      {/* Task Sections */}
      <DynamicAccordion
        header='To-Do'
        content={renderTasksTable('TO-DO', blue[500])}
        headerColor='#FAC3FF'
        expandedHeaderColor='#8BB4E3'
        bodyColor='#EAECF0'
        expandedBodyColor='#ffffff'
      />
      <DynamicAccordion
        header='In Progress'
        content={renderTasksTable('In Progress', green[500])}
        headerColor='#85D9F1'
        expandedHeaderColor='#6DC34F'
        bodyColor='#EAECF0'
        expandedBodyColor='#ffffff'
      />
      <DynamicAccordion
        header='Completed'
        content={renderTasksTable('Completed', deepPurple[500])}
        headerColor='#CEFFCC'
        expandedHeaderColor='#9C4DD2'
        bodyColor='#EAECF0'
        expandedBodyColor='#ffffff'
      />
    </Container>
  );
};

export default TaskList;
