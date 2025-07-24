import { useState } from 'react'
import Button from './button'
import Answer from './answer';
const Calculator = () => {
    const [inpVal,setInpVal] = useState('');
    function addFun(event){
        setInpVal(inpVal+event.target.innerText)
    }
    function evaluateAns(){
        const ans = eval(inpVal) == 0 ? '' : eval(inpVal);
        setInpVal(ans)
    }
    const val = ['1','2','+','3','4','-','6','7','*','8','9','0']
  return (
    <div>
        <input type="text" readOnly value = {inpVal}/>
        <div>
        {val.map((values,id)=> 
                <Button 
                    key={id}
                    val={values} 
                    addToInp = {addFun}
                />
            )}
        </div>
        <div>
            <Answer answer = {evaluateAns}/>   
        </div>
    </div>
  )
}

export default Calculator