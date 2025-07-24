import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo,editTodo } from '../features/todoSlice';

const TodoItem = () => {
    const todos = useSelector(state=> state.todos);
    const [edit,setEdit] = useState(false)
    const [todoEdit,setTodoEdit] = useState('')
    const dispatch = useDispatch()
    const editHandler = (todo)=>{
        setTodoEdit(todo.text)
        if(edit && todoEdit){
            const newEditTodo = {id:todo.id,todoEdit}
            dispatch(editTodo(newEditTodo))
        }
        setEdit((prev)=>!prev)
    }
  return (
    <div className="max-w-md mx-auto mt-8">
        {todos.map((todo)=>(
            <div key={todo.id} className="flex items-center justify-between bg-white p-4 rounded-lg shadow-md mb-3 hover:shadow-lg transition-shadow">
                <input className="text-gray-700 outline-none font-medium" 
                onChange={(e)=>setTodoEdit(e.target.value)} 
                readOnly={!edit}
                value={edit ? todoEdit : todo.text}/>
                    
                <button 
                    onClick={() => editHandler(todo)}
                    className={`px-4 py-1.5 rounded-md font-medium transition-all duration-200 mr-2
                    ${edit 
                        ? 'bg-green-500 text-white hover:bg-green-600' 
                        : 'bg-blue-500 text-white hover:bg-blue-600'
                    } cursor-pointer`}
                >
                    {edit ? 'Update' : 'Edit'}
                </button>
                <button 
                    onClick={()=> dispatch(removeTodo(todo.id))}
                    className="bg-red-500 cursor-pointer text-white px-3 py-1 rounded-full hover:bg-red-600 transition-colors focus:outline-none"
                >
                    X
                </button>
            </div>
        ))}
    </div>
  )
}

export default TodoItem