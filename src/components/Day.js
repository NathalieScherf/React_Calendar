import React from 'react'
import './Day.css'
function Day (props){
  return(
  <span className={`Day border border-secondary ${props.currentDate === true ? `bg-success` : 'null' }`}>{props.day}</span>)
}

export { Day }