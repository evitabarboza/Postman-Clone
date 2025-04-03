import React from 'react'
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    logo: {
        width: 100,
        padding: 5
    }

})

const Header = () => {
    const classes = useStyles();
    const logo = "https://media.licdn.com/dms/image/v2/C5612AQGFkE6PQh_3dA/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1525296673212?e=1749081600&v=beta&t=CtAkC1D-QMDoQK-0m2_r5w9h2yUbln9Z9pfNCCIJduo"
  return (
      <img src={logo} alt="Postman-logo" className={classes.logo} />
  )
}

export default Header
