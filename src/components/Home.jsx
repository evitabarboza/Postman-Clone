import React from 'react'
import Header from "./Header"
import Form from "./Form"
import SelectTab from "./SelectTab"
import { Box } from '@mui/material'
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  components: {
    width: '60%',
    margin: '20px auto 0 auto',
  }
})

const Home = () => {
  const classes = useStyles();
  return (
    <div>
      <Header />
      <Box className={classes.components}>
          <Form />
          <SelectTab/>
      </Box>
      
      
    </div>
  )
}

export default Home
