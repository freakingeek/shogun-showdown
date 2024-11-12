type Icons = "home" | "feed" | "discussions" | "wiki";

type IconProps = {
  name: Icons;
  className?: string;
};

export default function Icon({ name, className }: IconProps) {
  return (
    <img
      src={`/assets/images/icons/${name}.png`}
      alt=""
      className={className}
    />
  );
}
