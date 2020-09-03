import React from 'react';
import Todo from './Todo';



class TodoList extends React.Component {




  render(){
    return(
      <div className='shopping-list'>
        {this.props.toDo.map(task => {
          
         return( <Todo key={Todo.id} task={task} toggleComplete={this.props.toggleComplete} />)


        })}
        <button className='clear-btn' onClick={this.props.clearCompleted}>Clear Completed</button>
      </div>
    )
  }
}

export default TodoList


