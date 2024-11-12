import Logo from "@/components/Logo";
import { Outlet } from "react-router-dom";

export default function AccountsLayout() {
  return (
    <main
      style={{ background: 'url("/assets/images/accounts.png") no-repeat' }}
      className="flex justify-center items-center absolute top-0 left-0 right-0 bottom-0 !bg-cover"
    >
      <Logo className="w-64 absolute top-20" />

      <Outlet />
    </main>
  );
}
