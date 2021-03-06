import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      message: 'Hello Coding Garden!!',
      newTodo: '',
      todos: [{
        title: 'Learn React',
        done: false}, {
          title: 'Learn JSX',
          done: false
      }]
    };
  }

  


  newTodoChanged(event) {
    // console.log(event.target.value);
    this.setState({
      newTodo: event.target.value
    })
    
  }
  formSubmitted(event) {
    event.preventDefault()
    console.log(this.state.newTodo) 
    this.setState({
      todos: [...this.state.todos, {
        title: this .state.newTodo,
        done: false
      }]
    }) 
  }

  render() {
    return (
      <div className="App">
        <h3>{this.state.message}</h3>
        <form onSubmit={(event) => this.formSubmitted(event)}> 
          <label htmlFor ="newTodo">New Todo</label>
          <input onChange={(event) => this.newTodoChanged(event)} id="newTodo" name="newTodo"/> 
          <button type="submit">Add Todo</button>      
        </form>
        <ul>
        {this.state.todos.map(todo => {
        return <li key= 'todo.title'>{todo.title}</li>
        })}
        </ul>
      </div>
    );
  }
}

export default App;
