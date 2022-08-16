/**
 * A single user data
 */

import React from "react";
import useUser from "../query-hooks/useUser";

export default function User({ selectedUser }) {
  const user = useUser(selectedUser);

  return (
    <>
      {user.isLoading && <p>Loading single user data...</p>}

      {user.isSuccess && (
        <>
          <p>{`${user?.data?.name}`}</p>
        </>
      )}
    </>
  );
}
