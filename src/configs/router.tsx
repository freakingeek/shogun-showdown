import GlobalErrorPage from "@/app/global-error";
import RootLayout from "@/app/layout";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    errorElement: <GlobalErrorPage />,
    children: [],
  },
]);

export default router;
