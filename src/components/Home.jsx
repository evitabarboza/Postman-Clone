import React, { useContext, useState } from 'react'
import Header from "./Header"
import Form from "./Form"
import SelectTab from "./SelectTab"
import { Box } from '@mui/material'
import { makeStyles } from '@mui/styles';
import Response from './Response'
import ErrorScreen from './ErrorScreen'
import { DataContext } from '../context/DataProvider'
import { checkParams } from '../utils/common-utils'
import SnackBar from './SnackBar'
import { getData } from '../service/api'

const useStyles = makeStyles({
  components: {
    width: '60%',
    margin: '20px auto 0 auto',
  }
})

const Home = () => {
  const classes = useStyles();

  const [error, setError] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')

  const { formData, jsonText, paramData, headerData } = useContext(DataContext);

  const onSendClick = async () => {
    if (!checkParams(formData, jsonText, paramData, headerData, setErrorMsg)) {
      setError(true);
      return false;
    } 
    let response = await getData(formData, jsonText, paramData, headerData);   
  }

  return (
    <>
      <Header />
      <Box className={classes.components}>
          <Form onSendClick={onSendClick} />
          <SelectTab/>
          {/* <Response /> */}
          <ErrorScreen />
          { error && <SnackBar error={error} setError={setError} errorMsg={errorMsg} /> }
      </Box>
      
      
    </>
  )
}

export default Home
