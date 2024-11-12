import Button from "@/components/Button";
import Input from "@/components/Input";
import { Link } from "react-router-dom";

export default function LoginPage() {
  return (
    <form className="w-[480px] h-[576px] flex flex-col items-center text-center bg-black rounded-[32px] p-10">
      <h1 className="text-2xl font-bold">Begin Your Journey</h1>
      <span className="text-secondary mt-4">
        Step forth, warrior! Enter your email to begin your quest!
      </span>

      <Input label="email" placeholder="warrior@site.com" className="w-full mt-20"/>
      <Button className="w-full mt-8">Send Quest Code</Button>

      <span className="w-80 text-sm mt-auto">
        By proceeding, you honor our{" "}
        <Link to="/" className="text-primary">
          realm’s rules
        </Link>{" "}
        and accept the{" "}
        <Link to="/" className="text-primary">
          community's terms
        </Link>
        .
      </span>
    </form>
  );
}
