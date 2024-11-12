import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <section className="max-w-screen-xl mx-auto">
      <Outlet />
    </section>
  );
}
