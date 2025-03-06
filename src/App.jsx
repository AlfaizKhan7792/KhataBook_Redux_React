import React from 'react'
import Navbar from './components/Navbar'
import { Container } from '@mui/material'
import Home from './Pages/Home'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import LoginPage from './Pages/LoginPage'
import RegisterPage from './Pages/RegisterPage'
import PageNotFound from './Pages/PageNotFound'

const App = () => {
  return (
    <>
    <Router>
     <Navbar />
     <Container sx={{padding : "50px 0px 21px"}}>
    <Routes>
      <Route path='*' element={<PageNotFound />} />
      <Route path='/' element={ <Home />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/register' element={<RegisterPage />} />
    </Routes>
     </Container>
     </Router>
    </>
  )
}

export default App
