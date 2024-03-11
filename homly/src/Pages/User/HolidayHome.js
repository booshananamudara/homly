import React from 'react'
import { Box, Container,Typography } from '@mui/material'

import NavBar from '../../Components/NavBar/NavBar'
import BasicRating from '../../Components/MyProfile/reviews'


export default function HolidayHome() {
  return (
    <Box
        className="main_container"
        sx={{
          width: "100%",
          overflow: "hidden",
        }}
      >
        <Container
          maxWidth="xl"
          style={{ padding: 0}}
        >
          <NavBar sideNavBar="none" />
          <BasicRating/>
          <Typography  variant='h1'>
            Holiday Home Page
          </Typography>
          
        </Container>
      </Box>
  )
}
