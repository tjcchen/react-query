import axios from "axios";
import { useMutation, useQueryClient } from "react-query";

const createUser = (user) => {
  return axios
    .post("https://jsonplaceholder.typicode.com/users", user)
    .then((response) => response.data);
};

export default function useCreateUser(user) {
  const queryClient = useQueryClient();

  return useMutation((user) => createUser(user), {
    // 1. invalidateQueries will clear the cache, and refetch the users data
    // onSuccess: () => queryClient.invalidateQueries("users"),

    // 2. setQueryData will update users data
    onSuccess: (data) => queryClient.setQueryData(["users", 10], data),
  });
}
