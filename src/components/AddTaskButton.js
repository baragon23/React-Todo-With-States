import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';

class AddTaskButton extends React.Component {
	state = {
		open: false,
		name: '',
		description: ''
	};

	handleClickOpen = () => {
		this.setState({ open: true });
	};

	handleSubmit = () => {
		const task = {
			taskName: this.state.name,
			taskDescription: this.state.description
		};
		this.props.handleAddTask(task);
		this.setState({ open: false });
	};

	handleCancel = (e) => {
		this.setState({ open: false });
	};

	render() {
		return (
			<div className="add-button">
				<Button variant="contained" onClick={this.handleClickOpen}>
					Add Task
				</Button>
				<Dialog open={this.state.open} onClose={this.handleClose} aria-labelledby="form-dialog-title">
					<DialogContent>
						<TextField
							autoFocus
							margin="dense"
							id="name"
							label="Task Name"
							type="text"
							fullWidth
							onChange={
								(e) => this.setState({ name: e.target.value.trim() })
							}
						/>
						<TextField
							margin="dense"
							id="description"
							label="Description"
							type="text"
							fullWidth
							onChange={
								(e) => this.setState({ description: e.target.value.trim() })
							}
						/>
					</DialogContent>
					<DialogActions>
						<Button onClick={this.handleCancel} color="primary">
							Cancel
						</Button>
						<Button onClick={this.handleSubmit} color="primary">
							Submit
						</Button>
					</DialogActions>
				</Dialog>
			</div>
		);
	}
}

export default AddTaskButton;