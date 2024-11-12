import Menu from "./Menu";
import Button from "@/components/Button";

type SidebarProps = {
  className?: string;
};

export default function Sidebar({ className }: SidebarProps) {
  return (
    <aside className={className}>
      <div className="sticky top-4">
        <Menu />

        <Button href="/accounts/login" className="w-full mt-32">
          Login
        </Button>
      </div>
    </aside>
  );
}
