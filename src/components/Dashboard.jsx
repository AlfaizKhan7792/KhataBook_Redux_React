import { Box, Card, Divider, Stack, Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'

const Dashboard = () => {

  const {AllTransactions} = useSelector((state) => state.KhataBook)

  const Income = AllTransactions
  .filter((Transaction) => Transaction.type === "Credit")
  .reduce((p,c) => p + c.amount , 0)

  const Expance = AllTransactions
  .filter((Transaction) => Transaction.type === "Debit")
  .reduce((p,c) => p + c.amount , 0)


  return (
    <>
     <Card variant='Outlined' sx={{margin : "10px"}}>
     <Box sx={{flexGrow : "1"}} marginBlock={2}>
     <Stack direction="column" spacing={1} >
     <Typography variant='h5' sx={{fontWeight : "bold"}} color='success'>Total Income : {Income}</Typography>
     <Divider />
     <Typography variant='h5' sx={{color : "red" , fontWeight : "bold"}}>Total Expence : {Math.abs(Expance)}</Typography>
     <Divider />
     <Typography variant='h5' sx={{fontWeight : "bold"}} color='warning'>Total Balance : {Income - Expance}</Typography>
     <Divider />
     </Stack>
      </Box>
        </Card> 
    </>
  )
}

export default Dashboard
