import Menu from "./Menu";
import Button from "@/components/Button";
import Profile from "@/components/Profile";
import { useAuthContext } from "@/providers/AuthProvider";

type SidebarProps = {
  className?: string;
};

export default function Sidebar({ className }: SidebarProps) {
  const { isLoggedIn } = useAuthContext();

  return (
    <aside className={className}>
      <div className="sticky top-4">
        <Menu />

        <div className="w-full mt-32">{isLoggedIn ? <Profile /> : <Button href="/accounts/login">Login</Button>}</div>
      </div>
    </aside>
  );
}
