import React, { forwardRef, useId } from 'react'

const Input = forwardRef(({
    label,
    type='text',
    className='',
    ...props
},ref)=>{
    const id = useId()
return (
    <div className="w-full">
            {
                label && (
                    <label className="inline-block mb-1 pl-1 text-base font-medium" htmlFor={id}>
                        {label}
                    </label>
                )
            }
            <input 
                type={type} 
                id={id} 
                className={`${className}`} 
                {...props} 
                ref={ref}
            />
    </div>
)
})

export default Input