import HomePage from "@/app/page";
import RootLayout from "@/app/layout";
import NotFound from "@/app/not-found";
import GlobalErrorPage from "@/app/global-error";
import LoginPage from "@/app/accounts/login/page";
import AccountsLayout from "@/app/accounts/Layout";
import { createBrowserRouter } from "react-router-dom";
import SinglePostPage from "@/app/post/[id]/page";

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
        path: "/post/:id",
        Component: SinglePostPage,
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
