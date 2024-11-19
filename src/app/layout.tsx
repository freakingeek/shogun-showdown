import dayjs from "dayjs";
import Providers from "@/providers";
import { Outlet } from "react-router-dom";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

export default function RootLayout() {
  return (
    <section className="max-w-screen-xl mx-auto">
      <Providers>
        <Outlet />
      </Providers>
    </section>
  );
}
