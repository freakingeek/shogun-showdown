import Input from "@/components/Input";
import Button from "@/components/Button";
import { useMutation } from "@apollo/client";
import { Link, useNavigate } from "react-router";
import { ACCESS_TOKEN_KEY } from "@/configs/constants";
import { SubmitHandler, useForm } from "react-hook-form";
import { useAuthContext } from "@/providers/AuthProvider";
import { globalApolloClient } from "@/lib/apollo-clients";
import { LOGIN_MUTATION } from "@/graphql/mutations/login";
import { EMAIL_VALIDATION_MUTATION } from "@/graphql/mutations/emailValidation";

type Inputs = {
  email: string;
  password: string;
};

export default function LoginPage() {
  const navigate = useNavigate();
  const { setIsLoggedIn, setCurrentUser } = useAuthContext();
  const {
    register,
    setError,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const [validateEmail] = useMutation(EMAIL_VALIDATION_MUTATION, { client: globalApolloClient });
  const [login] = useMutation(LOGIN_MUTATION, {
    onCompleted: ({ loginNetwork }) => {
      localStorage.setItem(ACCESS_TOKEN_KEY, loginNetwork.accessToken);

      setIsLoggedIn(true);

      setCurrentUser({
        name: loginNetwork.member.name,
        email: loginNetwork.member.email,
      });

      navigate("/");
    },
    onError: () => {
      setError("password", {
        message: "An error has occurred. Try again or seek help from the elders.",
      });
    },
  });

  const onSubmit: SubmitHandler<Inputs> = ({ email, password }) => {
    validateEmail({
      variables: { input: { email } },
      onCompleted: ({ validateEmail }) => {
        if (!validateEmail.valid) {
          setError("email", {
            message: "That doesn’t look like a proper email, warrior.",
          });

          return;
        }

        login({ variables: { email, password } });
      },
      onError: () => {
        setError("email", {
          message: "The email format is invalid. Try again, brave one.",
        });
      },
    });
  };

  return (
    <form
      className="w-[480px] max-sm:w-[calc(100%-8px)] flex flex-col items-center text-center bg-black rounded-[32px] p-10"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h1 className="text-2xl font-bold">Begin Your Journey</h1>
      <span className="text-secondary mt-4">Step forth, warrior! Enter your email to begin your quest!</span>

      <Input
        type="email"
        label="email"
        error={errors.email?.message || ""}
        placeholder="warrior@site.com"
        className="w-full mt-10"
        {...register("email", {
          required: {
            message: "Type your email to proceed, warrior!",
            value: true,
          },
          pattern: {
            message: "That doesn’t look like a proper email, warrior.",
            value: /\S+@\S+\.\S+/,
          },
        })}
      />

      <Input
        type="password"
        label="password"
        error={errors.password?.message || ""}
        placeholder="********"
        className="w-full mt-4"
        {...register("password", {
          required: {
            message: "Type your password to proceed, warrior!",
            value: true,
          },
          minLength: {
            message: "Password must be at least 8 characters, warrior!",
            value: 8,
          },
          maxLength: {
            message: "Password cannot exceed 256 characters, brave soul!",
            value: 256,
          },
        })}
      />

      <Button className="w-full mt-8">Send Quest Code</Button>

      <span className="w-80 text-sm mt-10">
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
