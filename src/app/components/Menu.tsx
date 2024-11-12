import Icon from "@/components/Icon";
import { NavLink } from "react-router-dom";

type MenuProps = {
  className?: string;
};

export default function Menu({ className }: MenuProps) {
  return (
    <nav className={className}>
      <ul className="space-y-2">
        <li className="[&_.active]:bg-primary/35">
          <NavLink to="/" className="flex items-center gap-x-2 p-2 rounded-lg">
            <Icon name="home" />
            <span>home</span>
          </NavLink>
        </li>

        <li className="[&_.active]:bg-primary/35">
          <NavLink
            to="/feed"
            className="flex items-center gap-x-2 p-2 rounded-lg"
          >
            <Icon name="feed" />
            <span>feed</span>
          </NavLink>
        </li>

        <li className="[&_.active]:bg-primary/35">
          <NavLink
            to="/discussions"
            className="flex items-center gap-x-2 p-2 rounded-lg"
          >
            <Icon name="discussions" />
            <span>discussions</span>
          </NavLink>
        </li>

        <li className="[&_.active]:bg-primary/35">
          <NavLink
            to="/wiki"
            className="flex items-center gap-x-2 p-2 rounded-lg"
          >
            <Icon name="wiki" />
            <span>wiki</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
