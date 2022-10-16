import { Credentials } from "@chatapp/shared";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { fetchUsers } from "./utils";

const Container = styled.div`
  background-color: rgb(33, 33, 41);
  height: 80vh;
  width: 25%;
`;

const Contacts = () => {
  const [users, setUsers] = useState<Credentials[]>([]);

  useEffect(() => {
    fetchUsers().then(setUsers);
  }, []);

  return (
    <Container>
      <p className="usersHeader">Created users:</p>
      {users &&
        users.map((user) => {
          return (
            <div key={user._id}>
              <a className="username">{user.username}</a>
            </div>
          );
        })}
    </Container>
  );
};

export default Contacts;
