import Providers from "@/providers";
import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <section className="max-w-screen-xl mx-auto">
      <Providers>
        <Outlet />
      </Providers>
    </section>
  );
}
