import React from 'react'
import { TableRow, TableCell, Checkbox, TextField } from '@mui/material'
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  tablecell: {
    border: '1px solid rgba(224, 224, 224, 1)',
    borderCollapse: 'collapse',
    padding: ['7px 5px', '!important'],
  },
  checkbox: {
    padding: ['2px 5px', '!important']
  },
  textfield: {
    width: '100%'
  }
})

const AddRow = () => {
  const classes = useStyles();
  return (
    <TableRow>
      <TableCell className={classes.tablecell}>
        <Checkbox
          size='large'
          className={classes.checkbox}
        />
      </TableCell>
      <TableCell className={classes.tablecell}>
        <TextField
          className={classes.textfield}
          sx={{ input: { height: 30, padding: '0 5px' } }}
        />
      </TableCell>
      <TableCell className={classes.tablecell}>
      <TextField
          className={classes.textfield}
          sx={{ input: { height: 30, padding: '0 5px' } }}
        />
      </TableCell>
    </TableRow>
  )
}

export default AddRow
