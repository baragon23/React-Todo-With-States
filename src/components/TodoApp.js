import React from 'react';
import AddTaskButton from './AddTaskButton';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import TaskList from './TaskList';
import fetchTasks from '../utils/api';

export default class TodoApp extends React.Component {
	
	state = {
		tasks: []
	};

	handleActionButton = (currentTask) => {
		switch(currentTask.state) {
			case 'todo':
				this.setState((prevState) => ({
					tasks: prevState.tasks.map((task) => 
						task.id === currentTask.id ? { ...task, state: 'in-progress' } : task
					)
				}));
				break;
			case 'in-progress':
				this.setState((prevState) => ({
					tasks: prevState.tasks.map((task) => 
						task.id === currentTask.id ? { ...task, state: 'complete' } : task
					)
				}));
				break;
			case 'complete':
				this.setState((prevState) => ({
					tasks: prevState.tasks.filter((task) =>
						task.id !== currentTask.id
					)
				}));
				break;
			default:
				break;
		}
	};

	handleAddTask = (task) => {
		const id = this.state.tasks[this.state.tasks.length - 1].id + 1;
		const newTask = {
			id: id,
			...task,
			state: 'todo'
		};

		this.setState((prevState) => ({
			tasks: prevState.tasks.concat(newTask)
		}));
	};

	componentDidMount() {
		try {
			fetchTasks()
			.then((tasks) => {
				this.setState(() => (
					{
						tasks: tasks
					}
				));
			});
		}
		catch(error) {
			console.log('Error: ', error);
		}
	}

	render() {
		let tasks = [];
		tasks.push(this.state.tasks.filter((task) => {
			return task.state === 'todo';
		}));
		
		tasks.push(this.state.tasks.filter((task) => {
			return task.state === 'in-progress';
		}));

		tasks.push(this.state.tasks.filter((task) => {
			return task.state === 'complete';
		}));
		
		return (
			<Container maxWidth="lg">
				<Grid container spacing={2}>
					<Grid item xs={12}>
						<Grid container justify="center" spacing={2}>
							<Grid item>
								<AddTaskButton handleAddTask={this.handleAddTask} />
							</Grid>
							{tasks.map((tasks, index) => (
								<TaskList 
									index={index}
									key={index} 
									tasks={tasks} 
									handleActionButton={this.handleActionButton}	
								/>
							))}
						</Grid>
					</Grid>
				</Grid>
			</Container>
		);
	}
}