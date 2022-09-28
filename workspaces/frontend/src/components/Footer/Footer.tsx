import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: fixed;
  width: 80.1%;
  left: 10%;
  height: 100px;
  bottom: 0;
  border: 1px solid rgb(41, 41, 47);
  background-color: rgb(23, 23, 28);
  color: white;
`;

const Footer = () => {
  return (
  <Container>
    <div className="headerContent">
    </div>
  </Container>
  )
};

export default Footer;
