import React from 'react';


const Todo = props => {


  const handleClick = e => {
    e.preventDefault()
    props.toggleComplete(props.task.id)
  }


  return (
    <div onClick={handleClick} className={`item${props.task.completed ? " purchased" : ''}`}>
      <p>{props.task.task}</p>
    </div>

  )
}

export default Todo