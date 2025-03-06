import React from 'react'
import ListItemDisk from './ListItemDisk'
import { useSelector } from 'react-redux'
import { Box, List } from '@mui/material'

const ListGroup = () => {

    const {AllTransactions} = useSelector((state) => state.KhataBook)
    console.log(AllTransactions);

  return (
    <>
    <Box sx={{overflowY : "auto" , height : "70vh"}}>
    <List >
     {
        AllTransactions.map(AllTransaction => <ListItemDisk key={AllTransaction.id} AllTransaction={AllTransaction} />)
     } 
     </List>
    </Box>
    </>
  )
}

export default ListGroup
