import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Task } from '../../types'; // Import the shared Task type

const initialState = {
  tasks: [] as Task[], // Use Task[] type here
};

const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<Task>) => {
      state.tasks.push(action.payload);
    },
    deleteTask: (state, action: PayloadAction<number>) => {
      state.tasks = state.tasks.filter(
        (task) => task.id !== action.payload
      );
    },
    updateTask: (state, action: PayloadAction<Task>) => {
      const index = state.tasks.findIndex(
        (task) => task.id === action.payload.id
      );
      if (index !== -1) {
        state.tasks[index] = action.payload;
      }
    },
  },
});

export const { addTask, deleteTask, updateTask } =
  taskSlice.actions;
export default taskSlice.reducer;
