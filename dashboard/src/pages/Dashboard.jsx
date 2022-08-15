import React from "react";
import { useState } from "react";
import { useIsFetching } from "react-query";
import User from "../components/User";
import Users from "../components/Users";

export default function Dashboard() {
  const [selectedUser, setSelectedUser] = useState(null);
  const isFetching = useIsFetching();

  return (
    <>
      <Users setSelectedUser={setSelectedUser} />

      <hr />

      <User selectedUser={selectedUser} />

      {isFetching ? (
        <p style={{ position: "fixed", top: "0%", right: "0%" }}>Loading...</p>
      ) : null}
    </>
  );
}
