import React from 'react'





class TodoForm extends React.Component {


  constructor(){
    super()
    this.state = {
      task: ''
    }
  }

  handleChanges = e => {
    this.setState({
      task: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.addTask(this.state.task)
    this.setState({
      task: ''
    })
  }



  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor='task'></label>
        <input
        type='text'
        name='task'
        value={this.state.task}
        onChange={this.handleChanges}
        />

        <button type='submit' onSubmit={this.handleSubmit}>Add Task</button>
      </form>
    )
  }

}


export default TodoForm