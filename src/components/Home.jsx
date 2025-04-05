import React from 'react'
import Header from "./Header"
import Form from "./Form"
import SelectTab from "./SelectTab"
import { Box } from '@mui/material'
import { makeStyles } from '@mui/styles';
// import Response from './Response'
import ErrorScreen from './ErrorScreen'

const useStyles = makeStyles({
  components: {
    width: '60%',
    margin: '20px auto 0 auto',
  }
})

const Home = () => {
  const classes = useStyles();
  return (
    <>
      <Header />
      <Box className={classes.components}>
          <Form />
          <SelectTab/>
          {/* <Response /> */}
          <ErrorScreen />
      </Box>
      
      
    </>
  )
}

export default Home
