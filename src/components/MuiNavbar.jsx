import React from 'react'
import { AppBar, Button, Stack, Toolbar, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

const linkStyle = {
    color: 'inherit',
    textDecoration: 'none'
}

export const MuiNavbar = () => {
  return (
    <AppBar position='static'>
        <Toolbar sx={{backgroundColor: 'white', color: 'black', justifyContent: 'space-between'}}>
            <Link to='/' style={linkStyle} >
                <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
                    Davidson Poole
                </Typography>
            </Link>
            <Stack direction='row' spacing={2} >
                <Button color='inherit'><Link to='/' style={linkStyle} >Blog</Link></Button>
                <Button color='inherit'><Link to='aboutme' style={linkStyle} >About Me</Link></Button>
                <Button color='inherit'><Link to='contact' style={linkStyle} >Contact</Link></Button>
            </Stack>
        </Toolbar>
    </AppBar>
  )
}
