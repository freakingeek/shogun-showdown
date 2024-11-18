import { useLazyQuery, useQuery } from "@apollo/client";
import { ACCESS_TOKEN_KEY, IS_GUEST_KEY } from "@/configs/constants";
import { GET_GUEST_TOKEN_QUERY } from "@/graphql/queries/getGuestToken";
import {
  useMemo,
  useState,
  useContext,
  createContext,
  type Dispatch,
  type SetStateAction,
  type PropsWithChildren,
} from "react";
import { CurrentUser } from "@/types/user";
import { GET_CURRENT_USER_QUERY } from "@/graphql/queries/getCurrentUser";

type AuthContextTypes = {
  isLoggedIn: boolean;
  setIsLoggedIn: Dispatch<SetStateAction<boolean>>;
  currentUser?: CurrentUser;
  setCurrentUser: Dispatch<SetStateAction<CurrentUser | undefined>>;
};

const AuthContext = createContext<AuthContextTypes | undefined>(undefined);

export function useAuthContext() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuthContext is used outside of its provider");
  }

  return context;
}

export default function AuthProvider({ children }: PropsWithChildren) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState<CurrentUser>();

  const [getGuestToken] = useLazyQuery(GET_GUEST_TOKEN_QUERY, {
    variables: { domain: import.meta.env.VITE_NETWORK_DOMAIN },
    onCompleted: (data) => {
      localStorage.setItem(ACCESS_TOKEN_KEY, data.tokens.accessToken);
      localStorage.setItem(IS_GUEST_KEY, String(data.tokens.role.name === "Guest"));
    },
  });

  useQuery(GET_CURRENT_USER_QUERY, {
    onCompleted: ({ authMember }) => {
      setIsLoggedIn(true)
      setCurrentUser({ name: authMember.name, email: authMember.email });
    },
    onError: () => getGuestToken(),
  });

  const values = useMemo(() => ({ isLoggedIn, setIsLoggedIn, currentUser, setCurrentUser }), [currentUser, isLoggedIn]);

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
}
