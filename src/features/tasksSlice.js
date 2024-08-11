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
            const id = nextId()
            state.tasks = [...state.tasks, {id, text: action.payload, isCompleted: false}]
        },
        handleComplete: (state, action) => {
            const task = state.tasks.find(task => task.id === action.payload);
            if (task) {
                task.isCompleted = !task.isCompleted;
            }
        }
    }
})

export const { addTask, handleComplete } = tasksSlice.actions;

export default tasksSlice.reducer