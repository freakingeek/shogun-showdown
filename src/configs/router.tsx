import HomePage from "@/app/page";
import RootLayout from "@/app/layout";
import NotFound from "@/app/not-found";
import GlobalErrorPage from "@/app/global-error";
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
        path: "*",
        Component: NotFound,
      },
    ],
  },
]);

export default router;
