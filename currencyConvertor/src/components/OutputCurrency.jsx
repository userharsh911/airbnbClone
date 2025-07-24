import useCurrencyConvertor from '../hooks/usecurrencyConvertor'
import Selectcurrency from './Selectcurrency'
import { useRef } from 'react'

const OutputCurrenct = ({getOutputCurr,showVal,outputCurr}) => {
    const currencyobj = useCurrencyConvertor()
    const currencyList = Object.entries(currencyobj)
    const outputRef = useRef(null)
  return (
    <div className="flex flex-row gap-4 p-4">
        <div className="flex flex-col">
            <label 
                htmlFor="outputval" 
                className="text-sm font-medium text-gray-600 mb-2"
            >
                To
            </label>
            <input 
                type="number" 
                id='outputval'
                value={String(showVal)}
                readOnly
                className="w-48 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
        </div>
        <div className="flex flex-col">
            <label 
                htmlFor="outputcurr"
                className="text-sm font-medium text-gray-600 mb-2"
            >
                Currency
            </label>
            <select 
                ref={outputRef} 
                id='outputcurr' 
                onChange={(e)=> getOutputCurr(outputRef.current.value)}
                className="w-32 cursor-pointer px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                value={outputCurr}
            >
                <Selectcurrency currencyList={currencyList} />
            </select>
        </div>
    </div>
  )
}

export default OutputCurrenct