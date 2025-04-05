import React from 'react'
import { Box, Typography, Table, TableHead, TableBody, TableRow, TableCell} from '@mui/material'
import AddRow from './AddRow'
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  tablecell: {
    border: '1px solid rgba(224, 224, 224, 1)',
    borderCollapse: 'collapse',
    padding: ['7px 5px', '!important'],
  }
})

const CreateTable = ({ text }) => {
  const classes = useStyles();
  return (
    <Box>
      <Typography mt={2} mb={2}>{text}</Typography>
      <Table sx={{ minWidth: '100%', border: '1px solid rgba(224, 224, 224, 1)' }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className={classes.tablecell}></TableCell>
            <TableCell className={classes.tablecell}>KEY</TableCell>
            <TableCell className={classes.tablecell}>VALUE</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>  
            <AddRow />
        </TableBody>
      </Table>
    </Box>
  )
}

export default CreateTable
