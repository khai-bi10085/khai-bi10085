import React from 'react'



function CheckBox(props) {
  return (
    <div>
        <label>
        <input
          name={props.name}
          type='checkbox'
          onChange={props.onChange}
        />
        {props.title}
        </label>
        
        
    </div>
  )
}

export default CheckBox