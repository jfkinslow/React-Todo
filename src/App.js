import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

class App extends React.Component {
	// you will need a place to store your state in this component.
	// design `App` to be the parent component of your application.
	// this component is going to take care of state, and any change handlers you need to work with your state
	constructor(props) {
		super(props);
		this.state = { taskList: [] };
	}
	addClickHandler = (e, task) => {
		e.preventDefault();
		if (task.name !== '') {
			this.setState({ taskList: [...this.state.taskList, task] });
		}
	};
	clearClickHandler = e => {
		e.preventDefault();
		let completed = document
			.querySelectorAll('.todo-item.completed')
			.forEach(cur => cur.parentNode.removeChild(cur));
		let newTaskList = Array.from(this.state.taskList);
		newTaskList.filter(cur => (cur.completed ? false : true));
		console.log(newTaskList);
		this.setState({ taskList: newTaskList });
	};
	changeCompleted = (e, taskId) => {
		e.preventDefault();
		let newTaskList = Array.from(this.state.taskList);
		newTaskList.forEach(task => {
			if (task.id === taskId) {
				task.completed ? (task.completed = false) : (task.completed = true);
			}
		});
		console.log(newTaskList);
		this.setState({ taskList: newTaskList });
	};
	render() {
		return (
			<div>
				<h2>Welcome to your Todo App!</h2>
				<TodoList taskList={this.state.taskList} changeClickHandler={this.changeCompleted} />
				<TodoForm addClickHandler={this.addClickHandler} clearClickHandler={this.clearClickHandler} />
			</div>
		);
	}
}

export default App;
