import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: fixed;
  width: 500px;
  height: 100px;
  left: 50%;
  margin-left: -250px;
`;

const Header = () => {
  return <Container>Header</Container>;
};

export default Header;
