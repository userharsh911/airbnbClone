import React from 'react'
import EnterList from './enterList'
import DisplayList from './displayList'
import { useState } from 'react'

const TodoApp = () => {
    const [itemList, setItemList] = useState([])
    const addToList = (e, todoInput, dateInput) => {
        if(todoInput.length>2){
            const listobj = { list: todoInput, date: dateInput };
            setItemList((currVal)=>[...currVal, listobj])
        }else{
            alert("minimum length should be of 3")
        }
    }
    const deleteItem = (e, id) => {
        setItemList((currval)=>{
            const arr = currval;
            arr.splice(id,1);
            return [...arr]
        })
    }
    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-100 to-blue-100 py-8 px-4">
            <div className="max-w-2xl mx-auto">
                <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
                    My Todo List
                </h1>
                <div className="bg-white rounded-lg shadow-lg p-6 space-y-6">
                    <EnterList addToList={addToList} />
                    <div className="border-t border-gray-200 pt-6">
                        <DisplayList itemList={itemList} deleteItem={deleteItem} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TodoApp