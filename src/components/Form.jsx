import { Button, Card, FormControlLabel, Radio, RadioGroup, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Add, update } from '../Features/KhataBook/KBSlice';



const Form = () => {

  const {Edit} = useSelector((state) => state.KhataBook)

  const [Text , setText] = useState("")
  const [Amount, setAmount] = useState("");
const [Type, setType] = useState("");


const dispatch = useDispatch()

const handleSubmit = (e) =>{
  e.preventDefault();
  Edit.isEdit ? dispatch(update({id:Edit.AllTransaction.id, text:Text, amount:Amount, type:Type})) :
  dispatch(Add({id:crypto.randomUUID(), text:Text, amount:Amount, type:Type}))
  setAmount("")
  setType("")
  setText("")
}

useEffect(() => {
  setText(Edit?.AllTransaction?.text)
  setAmount(Edit?.AllTransaction?.amount)
  setType(Edit?.AllTransaction?.type)
}, [Edit]);

  return (
    <>
     <form onSubmit={handleSubmit}>
        <Card variant='Outlined'>
    <TextField label="Transaction_Name" required variant='standard' margin='dense' fullWidth onChange={(e) => setText(e.target.value)} value={Text} />
    <TextField type='number' label="Amount" required variant='standard' margin='dense' fullWidth onChange={(e) => setAmount(e.target.value)} value={Amount} />
        </Card>

       <RadioGroup name="use-radio-group" defaultValue="Credit" >

<FormControlLabel value="Credit" control={<Radio />} onChange={(e) => setType(e.target.value)} checked={Type === "Credit"} color="success" label="Credit" />

<FormControlLabel value="Debit" control={<Radio />} color="red" label="Debit" onChange={(e) => setType(e.target.value)} checked={Type === "Debit"} />

       </RadioGroup>
       <Button variant='contained' type="submit" fullWidth>Submit</Button>
        </form> 
    </>
  )

}

export default Form
