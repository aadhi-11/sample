import React from 'react'
import { Link } from 'react-router-dom'
import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material'

const NavBar = () => {
  return (
    <Box sx={{flexGrow:1}}>
    <AppBar position='static'>
        <Toolbar>
            <IconButton 
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu-Bar"
            sx={{ mr: 2 }}>

            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Sample
            </Typography>
            <Button color="inherit" component={Link} to="/login"> Login </Button>
        </Toolbar>
    </AppBar>
    </Box>
  )
}

export default NavBar
