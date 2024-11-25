import HomePage from "@/app/page";
import NotFound from "@/app/not-found";
import GlobalErrorPage from "@/app/global-error";
import LoginPage from "@/app/accounts/login/page";
import SinglePostPage from "@/app/post/[id]/page";
import AccountsLayout from "@/app/accounts/Layout";
import { createBrowserRouter } from "react-router-dom";
import RootLayout, {loader as rootLoader } from "@/app/layout";

const router = createBrowserRouter([
  {
    path: "/",
    loader: rootLoader,
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
