import Reac, { useEffect, useState } from 'react';
import {
  TextField,
  Button,
  Grid,
  Box,
  Typography,
  Container,
  CssBaseline,
  Card,
} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../Features/auth/AuthSlice';
import Loading from '../components/Loading';

const theme = createTheme();

const LoginPage = () => {

    const {user , isLoading} = useSelector((state) => state.kbauth)

    const dispatch = useDispatch()

    const [formData , setFormData] = useState({
        email : "",
        password : ""

    })


    const handleChange = (e) =>{
        setFormData({...formData  , [e.target.name] : e.target.value})
    }


    const handleSubmit = (e) =>{
        e.preventDefault()
        dispatch(loginUser(formData))
    }

    const navigate = useNavigate()

    useEffect(() => {
        if(user){
            navigate('/')
        }
    }, [user]);

    if(isLoading){
      return <Loading />
    }
 
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
      <Card variant='outlined' sx={{paddingInline : '25px' , background: "linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%)" , paddingBottom : '25px'
}}>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={formData.email}
              onChange={handleChange}
              
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
             value={formData.password}
              onChange={handleChange}
            />
           
           <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Button variant="text" size="small">
                  Forgot password?
                </Button>
              </Grid>
              <Grid item>
              <Link to="/register">
                <Button variant="text" size="small">
                  {"Don't have an account? Sign Up"}
                </Button>
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Card>
      </Container>
    </ThemeProvider>
  );
}

export default LoginPage;




