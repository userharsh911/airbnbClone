import React from 'react'
import { useState,useRef } from 'react'
import { MdFormatListBulletedAdd } from "react-icons/md";
const EnterList = ({addToList}) => {
    // const [todoInput,setTodoInput] = useState('');
    // const [dateInput,setDateInput] = useState('');
    const todoInput = useRef()
    const dateInput = useRef()
    const setItemList = (e)=>{
        addToList(e,todoInput.current.value,dateInput.current.value)
        todoInput.current.value = "";
        dateInput.current.value = '';
    }
  return (
    <div className="flex items-center space-x-4 p-4">
        <div>
            <input 
                type="text"
                ref={todoInput}
                className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm"
                placeholder="Enter todo item"
            />
        </div>
        <div>
            <input 
                type="datetime-local" 
                ref={dateInput}
                className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm" 
            />
        </div>
        <div>
            <button 
                onClick={setItemList}
                className="bg-blue-500 cursor-pointer  hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition duration-200 ease-in-out shadow-md hover:shadow-lg"
            >
                <MdFormatListBulletedAdd />
            </button>
        </div>
    </div>
  )
}

export default EnterList