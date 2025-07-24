import React from 'react'
import { MdDeleteForever } from "react-icons/md";
const DisplayList = ({itemList, deleteItem}) => {
    return (
        itemList.map((item,id)=>
            <div key={id} className="flex items-center justify-between p-5 mb-4 bg-gradient-to-r from-white to-gray-50 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-center space-x-4">
                    <span className="flex items-center justify-center w-8 h-8 bg-blue-500 text-white rounded-full font-bold">
                        {id+1}
                    </span>
                    <div className="text-xl text-gray-800 font-semibold">{item.list}</div>
                </div>
                <div className="flex items-center space-x-6">
                    <div className="text-sm text-gray-500 font-medium">{item.date}</div>
                    <button 
                        onClick={(e)=>deleteItem(e,id)}
                        className="p-2.5 cursor-pointer bg-red-500 text-white rounded-lg hover:bg-red-600 transform hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
                    >
                        <MdDeleteForever className="text-xl" />
                    </button>
                </div>
            </div>
        )
    )
}

export default DisplayList