import React, { useState } from 'react'
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

const AddRow = ({ addRows, rowId, data, setData }) => {
  const classes = useStyles();

  const [checkCheckbox, setCheckCheckbox] = useState(false);



  const handleChange = (e) => {
    let result = data.filter(entry => entry.id === Number(e.target.name))[0]

    if(!checkCheckbox){
      setCheckCheckbox(true)
        addRows(oldArr => [...oldArr, rowId])
        result={ ...result, id: rowId, check: true }
    } else {
      setCheckCheckbox(false)
      result={ ...result, id: rowId, check: false }
    }



    let index = data.findIndex(value => value.id === Number(e.target.name))

    if (index === -1) {
        setData(oldArr => [...oldArr, result])
    } else {
      const newArray = Object.assign([...data], {
          [index]: result
      })
      setData(newArray)
    }

  }

  // {
  //   checkbox: true,
  //   key: 'codeforinterview'
  //   value: 'youtube  channel',
  //   id: rowId
  // }

  const onTextChange = (e) => {
    // console.log(e.target.name, e.target.value)
    let result = data.filter(entry => entry.id === rowId)[0]
    result = { ...result, id: rowId, [e.target.name]: e.target.value }

    let index = data.findIndex(value => value.id === rowId)

    if (index === -1) {
        setData(oldArr => [...oldArr, result])
    } else {
      const newArray = Object.assign([...data], {
          [index]: result
      })
      setData(newArray)
    }
    console.log(data)
  }


  return (
    <TableRow>
      <TableCell className={classes.tablecell}>
        <Checkbox
          checked={checkCheckbox}
          size='large'
          className={classes.checkbox}
          onChange={(e) => handleChange(e)}
          name={rowId}
        />
      </TableCell>
      <TableCell className={classes.tablecell}>
        <TextField
          className={classes.textfield}
          sx={{ input: { height: 30, padding: '0 5px' } }}
          onChange={(e) => onTextChange(e)}
          name="key"
        />
      </TableCell>
      <TableCell className={classes.tablecell}>
        <TextField 
        className={classes.textfield}
        sx={{ input: { height: 30, padding: '0 5px' } }}
          onChange={(e) => onTextChange(e)}
          name="value"
        />
      </TableCell>
    </TableRow>
  )
}

export default AddRow
