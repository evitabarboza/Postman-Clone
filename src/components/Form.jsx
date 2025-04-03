import React from 'react'
import { Box, Select, MenuItem, TextField, Button } from '@mui/material'
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    components: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    select: {  // Fixed case from 'Select' to 'select'
        width: 150,
        height: 40
    },
    textField: { // Fixed case from 'TextField' to 'textField'
        width: '100%',
        background: '#F6F6F6'
    },
    button: {
        width: 100,
        height: 40,
        marginLeft: [5, '!important'],
        
    }
});

const Form = () => {
    const classes = useStyles();
    return (
        <Box className = {classes.components}>
            <Select
                className={classes.select} // Fixed className
            >
                <MenuItem value={'POST'}>POST</MenuItem>
                <MenuItem value={'GET'}>GET</MenuItem>
            </Select>
            <TextField 
                size="small"
                className={classes.textField} // Fixed className
            />
            <Button
                className={classes.button}
                variant="contained"
            >
                Send
            </Button>
        </Box>
    )
}

export default Form
