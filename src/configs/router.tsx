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
        path: "*",
        Component: NotFound,
      },
    ],
  },
]);

export default router;
