import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos : []
}

const todoSlice = createSlice({
    name:'Todo',
    initialState,
    reducers :{
        addTodo:(state,action)=>{
            const todoItem = {id:nanoid(),text:action.payload}
            state.todos.push(todoItem)
        },
        removeTodo:(state,action)=>{
            state.todos = state.todos.filter(todo => todo.id != action.payload)
        },
        editTodo: (state,action)=>{
            const {id,todoEdit} = action.payload;
            state.todos.map((todo) => {
                if(todo.id==id) {
                    todo.text = todoEdit
                }
                return todo ;
            })
        }
    }
})

export const {addTodo,removeTodo,editTodo} = todoSlice.actions
export default todoSlice.reducer

