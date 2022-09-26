import React from "react";
import styled from "styled-components";
import {AiFillHome, AiFillBell, AiOutlineUser, AiOutlineLogout} from "react-icons/ai"

const Container = styled.div`
  border-left: 1px solid rgb(41, 41, 47);
  background-color: rgb(33, 33, 41);
  height: 80vh;
  width: 50%;
`;

const Navigation = () => {
  return (
    <Container>
      <div className="navItems">
        <ul className="navOptions">
          <li><a href="/"><AiFillHome /></a></li>
          <li><a href="/"><AiFillBell /></a></li>
          <li><a href="/"><AiOutlineUser /></a></li>
          <li><a href="/"><AiOutlineLogout /></a></li>
        </ul>
        <br />
        <ul className="chatGroups">
          <p>Groups</p>
          <li></li>
        </ul>
      </div>
    </Container>
  );
};

export default Navigation;
