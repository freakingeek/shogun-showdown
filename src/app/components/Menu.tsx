import { NavLink } from "react-router-dom";
import Icon, { type Icons } from "@/components/Icon";

type Item = {
  link: string;
  icon: Icons;
  title: string;
};

type MenuProps = {
  className?: string;
};

export default function Menu({ className }: MenuProps) {
  const items: Item[] = [
    {
      link: "/",
      icon: "home",
      title: "home",
    },
    {
      link: "/feed",
      icon: "feed",
      title: "feed",
    },
    {
      link: "/discussions",
      icon: "discussions",
      title: "discussions",
    },
    {
      link: "/wiki",
      icon: "wiki",
      title: "wiki",
    },
  ];

  return (
    <nav className={className}>
      <ul className="flex flex-col max-xl:flex-row max-xl:gap-x-2 gap-y-2">
        {items.map((item, index) => (
          <li key={index} className="[&_.active]:bg-primary/35 max-xl:flex-1">
            <NavLink to={item.link} className="flex max-xl:flex-col max-xl:gap-y-1 items-center gap-x-2 p-2 rounded-lg">
              <Icon name={item.icon} />
              <span className="max-xl:text-sm">{item.title}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
