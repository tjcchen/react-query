import React from "react";
import { useState } from "react";
import User from "../components/User";
import Users from "../components/Users";

export default function Dashboard() {
  const [selectedUser, setSelectedUser] = useState(null);

  return (
    <>
      <Users setSelectedUser={setSelectedUser} />

      <hr />

      <User selectedUser={selectedUser} />
    </>
  );
}
