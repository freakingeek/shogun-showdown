import { Cookies } from "react-cookie";
import { HttpLink } from "@apollo/client/index.js";
import { ACCESS_TOKEN_KEY } from "@/configs/constants";
import { setContext } from "@apollo/client/link/context";

export const httpLink = new HttpLink({
  uri: import.meta.env.VITE_API_URL,
});

export const authLink = setContext((_, { headers }) => {
  const cookies = new Cookies();
  const token = cookies.get(ACCESS_TOKEN_KEY);

  return {
    headers: {
      authorization: token ? `Bearer ${token}` : "",
      ...headers,
    },
  };
});
