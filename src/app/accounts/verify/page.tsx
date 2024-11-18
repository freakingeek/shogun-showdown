import Input from "@/components/Input";
import Button from "@/components/Button";
import CopyRight from "../components/CopyRight";
import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
  code: string;
};

export default function VerifyPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = ({ code }) => {
    console.log("hello!", code);
  };

  return (
    <form
      className="w-[480px] h-[576px] flex flex-col items-center text-center bg-black rounded-[32px] p-10"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h1 className="text-2xl font-bold">Enter the Code of Honor</h1>
      <span className="text-secondary mt-4">Check your message scroll and enter the code to unlock the gates.</span>

      <Input
        type="text"
        label="code"
        maxLength={6}
        pattern="\d{6}"
        inputMode="numeric"
        placeholder="X X X X X"
        className="w-full mt-20"
        autoComplete="one-time-code"
        error={errors.code?.message || ""}
        {...register("code", {
          required: { message: "You must enter the Code of Honor to proceed.", value: true },
          minLength: { message: "The Code of Honor must hold 6 sacred symbols.", value: 6 },
          pattern: { message: "The Code of Honor must be a number to unlock the gates.", value: /\d{6}/ },
        })}
      />

      <Button className="w-full mt-8">Unlock the Gates</Button>

      <CopyRight />
    </form>
  );
}
