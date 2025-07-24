import React from 'react'
import { useState } from 'react'
import {useDispatch} from 'react-redux'
import { addTodo } from '../features/todoSlice'

const AddTodo = () => {
    const [input, setInput] = useState('');
    const dispatch = useDispatch()
    const handleAddTodo = (e)=>{
        e.preventDefault()
        if(input){
            dispatch(addTodo(input))
        }
        setInput("")
    } 
  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
        <form onSubmit={handleAddTodo} className="space-y-4">
            <input 
                type="text" 
                onChange={(e)=> setInput(e.target.value)} 
                value={input}
                placeholder="Add a new todo..."
                className="w-full px-4 py-2 text-gray-700 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button 
                type="submit"
                className="w-full cursor-pointer px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors duration-300"
            >
                Add Todo
            </button>
        </form>
    </div>
  )
}

export default AddTodo