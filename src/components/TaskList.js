import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import React from 'react';
import Task from './Task';

const TaskList = (props) => {
    
    const titles = ['Task', 'In Progress', 'Done'];
    
    return (
        <Grid item>
            <h2>{titles[props.index]}</h2>
            <Paper className="paper">
                {
                    props.tasks.map((task, index) => (
                        <Task 
                            key={index}
                            task={task} 
                            handleActionButton={props.handleActionButton}
                        />
                    ))
                }
            </Paper>
        </Grid>
    );
};

export default TaskList;