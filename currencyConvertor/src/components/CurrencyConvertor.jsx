import useCurrencyConvertor from '../hooks/usecurrencyConvertor'
import InputCurrency from './InputCurrency'
import OutputCurrenct from './OutputCurrency'
import { useState,useEffect } from 'react'

const CurrencyConvertor = () => {
    const [inputCurr,setInputCurr] = useState('usd');
    const [outputCurr,setOutputCurr] = useState('inr');
    const [inputValue,setInputValue] = useState(1);
    const [showVal,setShowVal] = useState()
    const data = useCurrencyConvertor(inputCurr);
    const swap = ()=>{
        const val = inputCurr;
        setInputCurr(outputCurr);
        setOutputCurr(val)
    }
    useEffect(()=>{
        setShowVal(inputValue*Number(data[outputCurr]))
    },[data,outputCurr,inputValue])

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-gray-100 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md border border-gray-100">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Currency Converter
        </h2>
        <div className="space-y-6">
          <InputCurrency 
            getInputCurr={(val)=> setInputCurr(val)}
            getCurrencyVal={(value)=> setInputValue(Number(value))}
            className="transition-all duration-300 hover:shadow-md" 
            inputValue={inputValue}
            inputCurr={inputCurr}
          />
          <OutputCurrenct 
            getOutputCurr={(val)=> setOutputCurr(val)}
            showVal={showVal}
            className="transition-all duration-300 hover:shadow-md" 
            outputCurr={outputCurr}
          />
          <div className="mt-8 text-center p-4 bg-gray-50 rounded-xl active:bg-gray-400">
            <button onClick={swap} className='cursor-pointer font-semibold'>Swap</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CurrencyConvertor