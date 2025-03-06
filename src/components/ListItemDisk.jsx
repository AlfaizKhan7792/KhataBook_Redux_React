import { Box, Divider, IconButton, ListItem, ListItemButton, ListItemText, Stack, Typography } from '@mui/material'
import CommentIcon from '@mui/icons-material/Comment';
import React from 'react'
import { Delete, Edit } from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import {edit, remove} from "../Features/KhataBook/KBSlice"

const ListItemDisk = ({AllTransaction}) => {

  const dispatch = useDispatch()

  const handleEdit = (AllTransaction) =>{
dispatch(edit(AllTransaction))
  }

  const handleRemove = (id) =>{
    dispatch(remove(id))
  }
  
  return (
    <>
    <ListItem margin="normal"  sx={{
      color: AllTransaction.type === "Credit" ? "green" : "red",
    }} >
        <Box sx={{flexGrow : "1"}}>
        <Stack direction="row" spacing={1}>
     <Typography variant='h5'>{AllTransaction.text} :</Typography>
     <Typography variant='h6'>{AllTransaction.amount}</Typography>
     </Stack>
        </Box>
        <Box>
        <Stack direction="row">
  <ListItemButton onClick={() => handleEdit(AllTransaction)} >
  <Edit color='warning' />
</ListItemButton>
<ListItemButton onClick={() => handleRemove(AllTransaction.id)} >
  <Delete color='error' />
</ListItemButton>
  </Stack> 
        </Box>
    </ListItem>
    <Divider />
  
    </>
  )
}

export default ListItemDisk
