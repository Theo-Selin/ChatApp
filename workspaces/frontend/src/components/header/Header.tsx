import React from "react";
import styled from "styled-components";
import logo from "./assets/logo.png";

const Container = styled.div`
  position: fixed;
  width: 79.9%;
  left: 10%;
  height: 100px;
  border: 1px solid rgb(41, 41, 47);
  background-color: rgb(23, 23, 28);
  color: white;
`;

const Header = () => {
  return (
    <Container>
      <div className="headerContent">
        <div className="logoContent">
          <img className="logo" src={logo} alt="logo"></img>
          <h1>ChatR</h1>
        </div>
        <div className="loginContent">
          <a href="/login">Login</a>
        </div>
      </div>
    </Container>
  );
};

export default Header;
