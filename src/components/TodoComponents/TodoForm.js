import React from 'react';

export default class TodoForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			todoName: '',
		};
	}

	onChangeHandler = event => {
		event.preventDefault();
		this.setState({ todoName: event.target.value });
	};

	render() {
		return (
			<form>
				<input type="text" value={this.state.todoName} onChange={this.onChangeHandler} name="todoName" />
				<button
					onClick={e => {
						this.props.addClickHandler(e, { name: this.state.todoName, id: Date.now(), completed: false });
						this.setState({ todoName: '' });
					}}
				>
					Add Todo
				</button>
				<button onClick={this.props.clearClickHandler}>Clear Completed</button>
			</form>
		);
	}
}
