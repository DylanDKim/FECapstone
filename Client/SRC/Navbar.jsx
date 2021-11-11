import React, { useState, useEffect } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import styled from 'styled-components';

const NavStyle = styled.section`
background-color: #808080;
color: #2affed;
display:flex;
flex-direction:row;
padding: 2em;
position: relative;
margin-bottom: 2em;
`;

const Logo = styled.span`
text-align: left;
left: 20px;
font-weight: bolder;
fonst-style: italic;
text-decoration: underline;
font-size: 24px;
`;

const Input = styled.input`
  background-color: #808080;
  color: white;
  font-size: 1em;
  position: relative;
  bottom: 5px;
  width: 20%;
  padding: 1px;
  border: bottom;
  border-color: transparent;
`;
const Container = styled.div`
  text-align: right;
  // border: 1px solid black;
  width: 790px;
  height: 29px;
  position: absolute;
  right: 20px;
`;

function Navbar(props) {
  return (
    <NavStyle>
      <Logo>Techxtile</Logo>
      <Container>
        <Input
          type="text"
          placeholder="Search the site..."
        />
        <SearchIcon
          style={{ color: '#2affed' }}
        />
      </Container>
    </NavStyle>
  );
}

export default Navbar;
