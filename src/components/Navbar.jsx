import { AppBar, Box, Button, Container, Toolbar , Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import LogoutIcon from '@mui/icons-material/Logout';
import { useDispatch, useSelector } from 'react-redux';
import { logOutUser } from '../Features/auth/AuthSlice';


const Navbar = () => {

  const {user}= useSelector((state)=> state.kbauth)

  const dispatch = useDispatch()

  const handleSubmit = () =>{
    dispatch(logOutUser())
  }

  return (
    <>
    
    
      <AppBar position="static">
       <Container maxWidth>
       <Toolbar variant="dense">       
        <Link to="/" color='secondary' style={{textDecoration : 'none' , flexGrow: '1'}}>
          <Typography variant="h6" color="inherit" component="div">
            KhataBook
          </Typography>
        </Link>  
        <Box sx={{display : 'flex' , flexDirection : 'row'}}>

         
   
        {
          !user ? <>
          </> :
          <> 
           <Typography variant='h6' fontWeight={500} align='center' sx={{color : 'black' , marginRight : '10px'}}>Hello : {user?.name}</Typography>
           <Button type='submit' onClick={handleSubmit} title='LogOut' variant='contained' color='error' ><LogoutIcon /></Button></>
        }
         
        </Box>
        </Toolbar>
       </Container>
      </AppBar>
    
  
    </>
  )
}

export default Navbar
