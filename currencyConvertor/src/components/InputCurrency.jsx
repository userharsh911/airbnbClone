import { useState } from 'react'
import useCurrencyConvertor from '../hooks/usecurrencyConvertor'
import Selectcurrency from './Selectcurrency'
import { useRef } from 'react'

const InputCurrency = ({getInputCurr,inputValue,getCurrencyVal,inputCurr}) => {
    const currencyobj = useCurrencyConvertor()
    const currencyList = Object.entries(currencyobj)
    const inputRef = useRef(null)
  return (
    <div className="flex space-x-4 p-4">
        <div className="flex flex-col">
            <label 
                htmlFor="inputval" 
                className="mb-2 text-sm font-medium text-gray-700"
            >
                From
            </label>
            <input 
                type="number" 
                id='inputval' 
                value={inputValue}
                className="px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={(e)=> getCurrencyVal(e.target.value)}
            />
        </div>
        <div className="flex flex-col">
            <label 
                htmlFor="currencyval"
                className="mb-2 text-sm font-medium text-gray-700"
            >
                Currency
            </label>
            <select 
                id='currencyval' 
                ref={inputRef} 
                onChange={(e)=> getInputCurr(inputRef.current.value)}
                className="cursor-pointer px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={inputCurr}
            >
                <Selectcurrency currencyList={currencyList} />
            </select> 
        </div>
    </div>
  )
}

export default InputCurrency