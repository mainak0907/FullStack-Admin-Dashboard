import React from 'react';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Navbar from "components/Navbar";
import { Box } from '@mui/material';
export const Layout = () => {
  return (
    <Box width="100%" height="100%">
      <Box>
        <Navbar></Navbar>
        <Outlet></Outlet>
      </Box>
    </Box>
  )
}

