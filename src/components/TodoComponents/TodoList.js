// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';

// let task = {
// 	name: 'test',
// 	id: Date.now(),
// 	completed: false,
// };
// console.log(task);

export default class TodoList extends React.Component {
	constructor(props) {
		super(props);
		this.state = { taskList: this.props.taskList };
	}
	componentDidMount() {
		this.setState({ taskList: this.props.taskList });
		console.log(this.state.taskList);
	}

	componentWillReceiveProps({ taskList }) {
		this.setState({ taskList: taskList });
	}

	render() {
		return (
			<div className="todo-list">
				{this.state.taskList.map(task => (
					<Todo task={task} onClick={this.props.changeClickHandler} />
				))}
			</div>
		);
	}
}
