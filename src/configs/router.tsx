import HomePage from "@/app/page";
import RootLayout from "@/app/layout";
import NotFound from "@/app/not-found";
import GlobalErrorPage from "@/app/global-error";
import LoginPage from "@/app/accounts/login/page";
import AccountsLayout from "@/app/accounts/Layout";
import VerifyPage from "@/app/accounts/verify/page";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    errorElement: <GlobalErrorPage />,
    children: [
      {
        path: "/",
        Component: HomePage,
        index: true,
      },
      {
        path: "/accounts/*",
        Component: AccountsLayout,
        children: [
          {
            path: "login",
            Component: LoginPage,
          },
          {
            path: "verify",
            Component: VerifyPage,
          },
          {
            path: "*",
            Component: NotFound,
          },
        ],
      },
      {
        path: "*",
        Component: NotFound,
      },
    ],
  },
]);

export default router;
