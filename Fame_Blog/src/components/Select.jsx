import React, {forwardRef, useId} from 'react'

const Select = ({
    options,
    label,
    className="",
    ...props
},ref) => {
    const id = useId()
  return (
    <div>
        <div>
            {
                label && (
                    <label htmlFor={id}>{label}</label>
                )
            }
        </div>
        <select id={id} className={`${className}`} {...props} ref={ref}>
            {options?.map(opt=>(
                <option key={opt} value={opt}>{opt}</option>
            ))}
        </select>
    </div>
  )
}

export default forwardRef(Select)