import React from 'react'

function InvalidField(props) {
  return (
    !props.state && 
    <div className='inline-block text-red-500 text-xs lg:text-sm font-bold italic lg:px-1'>
      <span>({props.text}*)</span>
    </div>
  )
}

export default InvalidField