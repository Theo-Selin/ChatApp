import { Credentials } from "@chatapp/shared";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { fetchUsers } from "./utils";

const Container = styled.div`
  background-color: rgb(23, 23, 28);
  overflow: scroll;
  height: 80vh;
  width: 25%;
`;

const Contacts = () => {
  const [users, setUsers] = useState<Credentials[]>([]);

  useEffect(() => {
    fetchUsers().then(setUsers);
  }, []);

  return (
    <>
      <Container>
        <div className="usersHeader">Created users:</div>
        {users &&
          users.map((user) => {
            return (
              <div className="username" key={user._id}>
                <a>{user.username}</a>
              </div>
            );
          })}
      </Container>
    </>
  );
};

export default Contacts;
