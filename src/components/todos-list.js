import React from 'react';
import TodosListHeader from './todos-list-header';
import _ from 'lodash';
import TodosListItem from './todos-list-item';

export default class TodosList extends React.Component {
  renderItems() {
    const props = _.omit(this.props, 'todos');
    return _.map(this.props.todos, (todo, index) => <TodosListItem key={index} {...todo} {...props} />)
    // passing in spread the same as passing in props like task={todo.task} and isCompleted={todo.isCompleted}
    // instead of passing in toggleTask={this.props.toggleTask} we want to pass in a few methods so include props {...props} but omit the ones you already pass in in const props
  }

  render () {
    return (
      <table>
        <TodosListHeader />
        <tbody>
          {this.renderItems()}
        </tbody>
      </table>
    );
  }
}
