import ActionButton from './ActionButton';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import React from 'react';

const Task = (props) => {
    
    let color = '';
    let text = '';
    if (props.task.state === 'in-progress') {
        color = 'primary';
        text = 'Complete';
    }
    else if (props.task.state === 'complete') {
        color = 'secondary';
        text = 'Remove';
    }
    else {
        color='inherit';
        text = 'Start';
    }
    
    return (
        <Grid
            container
            direction="column"
            justify="flex-start"
            alignItems="stretch"
        >
            <Paper>
                <p>{props.task.taskName}</p>
                <p>{props.task.taskDescription}</p>
                <ActionButton 
                    color={color} 
                    text={text} 
                    handleActionButton={props.handleActionButton}
                    task={props.task}
                />
            </Paper>
        </Grid>
    );

};

export default Task;