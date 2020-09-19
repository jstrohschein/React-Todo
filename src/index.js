import React from 'react';
import ReactDOM from 'react-dom';
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import "./styles.css"



const toDo = [
  {
    task: 'vacuum',
    id: Date.now(),
    completed: false
  },
  {
    task: 'sanitize',
    id: Date.now(),
    completed: false
  },
  {
    task: 'organize',
    id: Date.now(),
    completed: false
  },
  {
    task: 'sweep',
    id: Date.now(),
    completed: false
  },
  {
    task: 'mop',
    id: Date.now(),
    completed: false
  },
  {
    task: 'appointment',
    id: Date.now(),
    completed: false
  }
];

class App extends React.Component {

  constructor() {
    super()
    this.state = {
      toDo: toDo
    }
  }


  toggleComplete = taskId => {
    this.setState({
      toDo: this.state.toDo.map(task => {
        if (task.id === taskId) {
          return {
            ...task,
            completed: !task.completed
          }
        }

        return task
      })
    })
  }


  clearCompleted = () => {
    this.setState({
      toDo: this.state.toDo.filter(task => {
        return !task.completed
      })
    })
  }


  addTask = taskName => {
    this.setState({
      toDo: [...this.state.toDo, {task: taskName, id: Date.now(), completed: false}]
    })
  }


  render() {
    return (
      <div className='App'>
        <div className='header'>
          <h1>To Do List</h1>
          <TodoForm addTask={this.addTask} />
        </div>
        <TodoList
          toDo={this.state.toDo}
          toggleComplete={this.toggleComplete}
          clearCompleted={this.clearCompleted}
          />
      </div>
    )
  }

}

ReactDOM.render(<App />, document.getElementById('root'));
