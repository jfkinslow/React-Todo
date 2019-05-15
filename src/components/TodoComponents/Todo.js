import React from 'react';
import './Todo.css';

export default class Todo extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			task: this.props.task,
		};
	}

	render() {
		return (
			<div
				className={this.state.task.completed ? 'todo-item completed' : 'todo-item'}
				onClick={e => this.props.onClick(e, this.state.task.id)}
			>
				{this.state.task.name}
			</div>
		);
	}
}
