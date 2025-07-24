import React from 'react'

const Selectcurrency = ({currencyList}) => {
  return (
    <>
        {currencyList.map(([sign],id)=><option key={id} className="hover:bg-gray-200 cursor-pointer" value={sign} >{sign}</option>)}
    </>
  )
}

export default Selectcurrency