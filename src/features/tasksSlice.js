import { createSlice } from "@reduxjs/toolkit";
import nextId from "react-id-generator";

const initialState = {
    tasks: []
}

export const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask: (state, action) => {
            
            const existingTask = state.tasks.find(task => task.text.toLowerCase() === action.payload.toLowerCase());

            if (action.payload === '') {
                alert('Add a task');
            } else {
                if (existingTask) {
                
                    alert('You already have this task!');
                } else {
                    
                    const id = nextId();
                    state.tasks = [...state.tasks, { id, text: action.payload, isCompleted: false }];
                }
            }
    
            
        },
        handleComplete: (state, action) => {
            const task = state.tasks.find(task => task.id === action.payload);
            if (task) {
                task.isCompleted = !task.isCompleted;
            }
        },
        removeTask: (state, action) => {
            const newArr = state.tasks.filter((task) => task.id !== action.payload)
            state.tasks = newArr
        }
    }
})

export const { addTask, handleComplete, removeTask } = tasksSlice.actions;

export default tasksSlice.reducer