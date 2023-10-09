import { createSlice, nanoid } from "@reduxjs/toolkit";


// initial state
// can be aarya can be object(for multiple)
const initialState = {
    todos: [{ id: 1, text: "Hello World" }]
}

// Slices
// Bigger version of reducers (function)
// Slice name is important
// Reducers will have property and functions 
export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        }
    }
})

// These are the individual functions.
// This will be used in the componnets as a single functions
export const { addTodo, removeTodo } = todoSlice.actions

// To make aware the config store about the data.
// This will be used in our store
export default todoSlice.reducer

