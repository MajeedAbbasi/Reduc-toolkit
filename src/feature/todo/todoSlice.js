import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{ id: 1, text: "hello world" }]
}
export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(), text: action.payload
            }
            if (todo.text !== "") {
                state.todos.push(todo)
            }
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload)
            console.log(state.todos)
        },

    }

});
export const { addTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer