import Logo from "@/components/Logo";

export default function Header() {
  return (
    <header className="flex items-center justify-center relative">
      <img src="/assets/images/header.png" alt="" />
      <Logo className="absolute max-sm:w-44" />
    </header>
  );
}
