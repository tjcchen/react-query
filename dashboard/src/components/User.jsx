/**
 * A single user data
 */

import React from "react";
import useUser from "../query-hooks/useUser";

export default function User() {
  const user = useUser(3);

  console.log(user.data);

  return (
    <>
      {user.isLoading && <p>Loading single user data...</p>}

      {user.isError && <p>Loading single user data failed...</p>}

      {user.isSuccess && (
        <>
          <p>{`${user?.data?.name} - ${user?.data?.address?.street}`}</p>
          <p>{`${user?.data?.email} - ${user?.data?.phone}`}</p>
          <p>{`${user?.data?.id} - ${user?.data?.website}`}</p>
        </>
      )}
    </>
  );
}
