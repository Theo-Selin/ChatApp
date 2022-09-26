import React from "react";
import styled from "styled-components";
import logo from "./assets/logo.png"

const Container = styled.div`
  position: fixed;
  width: 79.9%;
  left: 10%;
  height: 130px;
  border: 1px solid rgb(41, 41, 47);
  border-bottom: 1px solid black;
  background-color: rgb(23, 23, 28);
  color: white;
`;

const Header = () => {
  return (
  <Container>
    <div className="headerContent">
      <img className="logo" src={logo}></img>
      <h1>ChatApp</h1>
    </div>
  </Container>
  )
};

export default Header;
