import React from 'react'
import { AppBar, Box, Button, IconButton, Paper, Stack, TextField, Toolbar, Typography} from '@mui/material'

function Login() {
  return (
    <div>
      <Box sx={{flexGrow:1}}>
        <Box
            sx={{
                mt:12,
                display:'flex',
                flexWrap:'wrap',
                justifyContent:'center','& >:not(style)':{
                    m:1,
                    width:'50%',
                    height:'300px'
                }
            }}>
                <Paper elevation={3} sx={{ display:'flex',flexWrap:'wrap', justifyContent:'center',alignItems:'center',backgroundColor:'wheat'}}>
                    <div>
                        <Typography variant='h4' gutterBottom sx={{mt:2,fontFamily:"-moz-initial"}} >
                            Login/Signup
                        </Typography>
                        <Stack spacing={2} direction={'column'} sx={{mb:4}} >
                        <TextField id="user-Name" label="user-Name" variant="standard" />
                        <TextField id="password" label="password" variant="standard" />
                        <Button variant='contained' sx={{fontFamily:'-moz-initial'}} >Login</Button>
                        </Stack>
                    </div>
                </Paper>
        </Box>

      </Box>
    </div>
  )
}

export default Login
