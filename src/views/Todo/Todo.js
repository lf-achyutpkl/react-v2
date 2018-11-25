import React, { Component } from 'react';

import List from '../../components/List/List';

class Todo extends Component {
  constructor() {
    super();

    this.state = {
      todo: '',
      todos: ['a', 'b']
    };
  }

  render() {
    return (
      <div>
        <input
          value={this.state.todo}
          onChange={e => this.setState({ todo: e.target.value })}
        />
        <button onClick={() => this._addTodo()}>Add</button>

        <List todos={this.state.todos} />
      </div>
    );
  }

  _addTodo = () => {
    this.setState({
      todos: this.state.todos.concat(this.state.todo),
      todo: ''
    });
  };
}

export default Todo;
