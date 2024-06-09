"use client";

import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getUsers } from "@/routes";

const UserList = () => {
  const { isLoading, error, data: users } = useQuery(["users"], getUsers);

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred";

  return (
    <div>
      <div className="text-black my-5 text-3xl">
        {users?.map((user) => (
          <div key={user.username} className="flex gap-3 items-center">
            {user.firstName} {user.lastName}
          </div>
        ))}
      </div>
    </div>
  );
};
export default UserList;
