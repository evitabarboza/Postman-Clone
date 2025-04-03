import React from 'react'
import { Box,Tabs, Tab } from '@mui/material'
import { useState } from 'react'
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    components: {
        marginTop: 20
    },
    tab: {
        textTransform: ['none', '!important'],
    }
})

const SelectTab = () => {

    const classes = useStyles();
    const [value, setValue] = useState(0);

    const handleChange = (event, newvalue) => {
        setValue(newvalue)
    }

  return (
    <div>
      <Box className={classes.components}>
        <Tabs value={value} onChange={handleChange} 
        TabIndicatorProps = {{sx: {backgroundColor: '#F26B3A', height: 4, bottom: 2}}}
        textColor='none'
        aria-label="basic tabs example">
            <Tab label="Params" className={classes.tab} />
            <Tab label="Headers" className={classes.tab} />
            <Tab label="Body"  className={classes.tab} />
      </Tabs>
      <Box
            role="tabpanel"
            hidden={value !== 0}
            id={`simple-tabpanel-${0}`}
            aria-labelledby={`simple-tab-${0}`}
        >
        Params
        </Box>
        <Box
            role="tabpanel"
            hidden={value !== 1}
            id={`simple-tabpanel-${1}`}
            aria-labelledby={`simple-tab-${1}`}
        >

        Header
        </Box>
        <Box
            role="tabpanel"
            hidden={value !== 2}
            id={`simple-tabpanel-${2}`}
            aria-labelledby={`simple-tab-${2}`}
        >

        Body
        </Box>
      </Box>
    </div>
  )
}

export default SelectTab
