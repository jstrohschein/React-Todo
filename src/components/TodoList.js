import React from 'react';
import Todo from './Todo';



class TodoList extends React.Component {




  render(){
    return(
      <div className='shopping-list'>
        <ul>
        {this.props.toDo.map(task => {
          
         return( <Todo key={task.id} task={task} toggleComplete={this.props.toggleComplete} />)


        })}
        </ul>
        <div>
        <button className='clear-btn' onClick={this.props.clearCompleted}>Clear Completed</button>
        </div>
      </div>
    )
  }
}

export default TodoList


