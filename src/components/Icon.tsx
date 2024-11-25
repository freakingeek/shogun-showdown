// NOTE: We should use better solutions in production, but I kept it simple for this project
export type Icons = "home" | "feed" | "discussions" | "wiki" | "like";

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
