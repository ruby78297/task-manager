// Dashboard.tsx
import React, { useState } from 'react';
import { Tabs, Tab, Box } from '@mui/material';
import { Link, Route, Routes } from 'react-router-dom';
import TaskList from '../components/TaskList';
import TaskBoard from '../components/TaskBoard';
import Navbar from '../components/Navbar';

const Dashboard: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = (
    event: React.SyntheticEvent,
    newValue: number
  ) => {
    setSelectedTab(newValue);
  };

  return (
    <>
      <Navbar />
      <Box sx={{ width: '100%' }}>
        <Tabs
          value={selectedTab}
          onChange={handleTabChange}
          aria-label='task tabs'
        >
          <Tab label='Task List' component={Link} to='/' />
          <Tab
            label='Task Board'
            component={Link}
            to='/task-board'
          />
        </Tabs>
        <Routes>
          <Route path='/' element={<TaskList />} />
          <Route path='/task-board' element={<TaskBoard />} />
        </Routes>
      </Box>
    </>
  );
};

export default Dashboard;
