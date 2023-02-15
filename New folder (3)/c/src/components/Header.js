import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { TabScrollButton } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const Header = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const isLoggedIn =useSelector(state=>state.isLoggedIn);
  return (
    <>
    <Navbar style={{backgroundImage:"linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #4158D0 100%)"}} >
      <Container>
        <Link to="/" className='h2 text-light navbar-brand  '>BlogApp</Link>
        { isLoggedIn &&   <Box display='flex'  marginLeft="auto" marginRight="auto" >
            <Tabs value={value} onChange={handleChange}>
                <Tab LinkComponent={Link} to="/blogs" label="All Blogs"/>
                <Tab LinkComponent={Link} to="/myBlogs" label="My Blogs"/>
              </Tabs>
            </Box>}
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">

        { !isLoggedIn && <> <Link  to="/auth" type="button" className="btn btn-info mx-1">Login</Link>
        <Link  type="button" className="btn btn-info mx-1">signup</Link></>}
        { isLoggedIn && <Link type="button" className="btn btn-info mx-1">Logout</Link>}
   
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}
