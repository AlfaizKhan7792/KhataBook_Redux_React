import React, { useEffect } from 'react'
import Left from '../components/Left'
import Right from '../components/Right'
import { Box, Grid, Typography } from '@mui/material'
import { useSelector } from 'react-redux'
// import { useNavigate } from 'react-router-dom'
import Loading from '../components/Loading'

const Home = () => {
   const {user , isLoading}= useSelector((state)=> state.kbauth)

  //  const navigate = useNavigate()

   if(isLoading){
    return(
      <Loading />
    )
   }

//     useEffect(() =>{
// if (!user) {
//     navigate("/login")
// }
//     } , [user])

   return (
    <>
   <Typography variant='h3' align="center" sx={{ marginBlockEnd : "14px"}}>Dashboard</Typography>
   <Box border={2} borderRadius={5}>
     <Grid container spacing={2} marginBlock={0}>
      <Grid item xs={8} >
     <Left />
      </Grid>
      <Grid item xs={4}>
     <Right />
      </Grid>
     </Grid>
   </Box>
    </>
  )
}

export default Home
