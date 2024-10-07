import React from 'react'

export const DropdownFilter = ({ title, optionVal, setOptionVal, options }) => {
  return (
    <div className='flex p-2 px-3 mr-2 border border-primblue-900 rounded'>
      <p className='mr-1'>{title}:</p>
      <select onClick={(e) => (optionVal !== e.target.value) ? setOptionVal(e.target.value) : null} className='text-blue-500 bg-primblue-900 px-1 pb-1' name='sortby' id='sortby' placeholder="sortby">
        {
          options.map(({ value, text }) => (
            <option key={value} value={value}>{text}</option>
          ))
        }
      </select>
    </div>
  )
}
