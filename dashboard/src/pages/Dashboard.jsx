import React, { useState } from "react";
import { useIsFetching } from "react-query";
import CreateUser from "../components/CreateUser";
import User from "../components/User";
import Users from "../components/Users";

export default function Dashboard() {
  const [selectedUser, setSelectedUser] = useState(1);
  const isFetching = useIsFetching();

  return (
    <>
      <Users setSelectedUser={setSelectedUser} />
      <hr />
      <User selectedUser={selectedUser} />
      <hr/>
      <CreateUser />

      {isFetching ? (
        <p style={{ position: "fixed", top: "0%", right: "0%" }}>Loading...</p>
      ) : null}
    </>
  );
}
