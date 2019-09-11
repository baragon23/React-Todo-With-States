import Button from '@material-ui/core/Button';
import React from 'react';

const ActionButton = (props) => {
    
    return (
        <Button 
            variant="contained" 
            color={props.color}
            size="small"
            onClick={(e) => {
                props.handleActionButton(props.task)
            }}
        >
            {props.text}
        </Button>
    );
};

export default ActionButton;