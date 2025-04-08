import React,  { useContext } from 'react'
import { Box, Select, MenuItem, TextField, Button } from '@mui/material'
import { makeStyles } from '@mui/styles';
import { DataContext } from '../context/DataProvider';

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
        background: '#F6F6F6',
        marginLeft: [5, '!important']
    },
    button: {
        width: 100,
        height: 40,
        marginLeft: [5, '!important'],
        
    }
});

const Form = ({ onSendClick }) => {
    const classes = useStyles();

    const { formData, setFormData } = useContext(DataContext);

    const handleChange = (e) => {
        setFormData({...formData, type: e.target.value});
       
    }

    const onUrlChange = (e) => {
        setFormData({...formData, type: e.target.value});
    }

    return (
        <Box className = {classes.components}>
            <Select
                value={formData.type}
                label="POST"
                onChange={(e) => handleChange(e)}
                className={classes.select} // Fixed className
            >
                <MenuItem value={'POST'}>POST</MenuItem>
                <MenuItem value={'GET'}>GET</MenuItem>
            </Select>
            <TextField 
                size="small"
                className={classes.textField} // Fixed className
                onChange={(e) => onUrlChange(e)}
            />
            <Button
                className={classes.button}
                variant="contained"
                onClick={() => onSendClick()}
            >
                Send
            </Button>
        </Box>
    )
}

export default Form
