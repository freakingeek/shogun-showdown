import { Cookies } from "react-cookie";
import { CurrentUser } from "@/types/user";
import { useQuery } from "@apollo/client/index.js";
import { ACCESS_TOKEN_KEY } from "@/configs/constants";
import { GET_CURRENT_USER_QUERY } from "@/graphql/queries/getCurrentUser";
import {
  useMemo,
  useState,
  useContext,
  createContext,
  type Dispatch,
  type SetStateAction,
  type PropsWithChildren,
  useEffect,
} from "react";

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

  const { refetch } = useQuery(GET_CURRENT_USER_QUERY, {
    onCompleted: ({ authMember }) => {
      if (authMember.name === "Guest") {
        return;
      }

      setIsLoggedIn(true);
      setCurrentUser({ name: authMember.name, email: authMember.email });
    },
    onError: () => {
      const cookies = new Cookies();
      cookies.remove(ACCESS_TOKEN_KEY);
    },
  });

  useEffect(() => {
    refetch();
  }, [currentUser, refetch]);

  const values = useMemo(() => ({ isLoggedIn, setIsLoggedIn, currentUser, setCurrentUser }), [currentUser, isLoggedIn]);

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
}
