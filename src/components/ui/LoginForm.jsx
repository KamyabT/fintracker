import { useForm } from "react-hook-form";
import { auth } from "../../services/auth";
import { useAuth } from "../../context/AuthContext";
import Button from "./Button";
import { Mail, LockKeyhole } from "lucide-react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const LoginForm = () => {
  const { login } = useAuth();

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  async function onSubmit({ email, password }) {
    try {
      const response = await auth(email, password);
      if (response.status !== 200) {
        toast.error("Login failed, Please try again");
      } else {
        toast.success("Login successfull, redirecting to dashboard");
        login(response.data.record, response.data.token);
        navigate("/dashboard");
      }
    } catch (error) {
      toast.error(`Login failed with ${error.name}, Please try again`);
    }
  }




  return (
    <form
      className="flex flex-col grow w-full space-y-4 mt-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="relative">
        <div className="flex flex-row items-center justify-between">
          <label className="font-medium" htmlFor="email">
            Email address
          </label>
          {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
        </div>

        <Mail className="absolute bottom-4 left-3" color="gray" size={18} />
        <input
          className="w-full mt-2 px-4 py-3 ps-10 outline-none border border-gray-300 appearance-none rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-transparent placeholder-gray-400"
          type="email"
          placeholder="you@example.com"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Please Enter A Valid Email!",
            },
          })}
        />
      </div>
      <div className="relative">
        <div className="flex flex-row items-center justify-between">
          <label className="font-medium" htmlFor="password">
            Password
          </label>
          {errors.password && (
            <p className="text-red-500 text-sm ">{errors.password.message}</p>
          )}
        </div>
        <LockKeyhole className="absolute bottom-4 left-3" color="gray" size={18} />
        <input
          className="w-full mt-2 px-4 py-3 ps-10 outline-none border border-gray-300 appearance-none rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-transparent placeholder-gray-400"
          type="password"
          placeholder="••••••••"
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Password must be at least 8 characters long!",
            },
          })}
        />
      </div>
      <div className="flex flex-row justify-between">
        <div className="flex flex-row items-center gap-2">
          <input type="checkbox" id="remember" />
          <label htmlFor="remember">Remember me</label>
        </div>
        <div className="text-indigo-500">Forgot password?</div>
      </div>
      <Button
        classesList={`w-full py-3 px-4 rounded-lg font-semibold text-white cursor-pointer transition hover:bg-indigo-700 bg-indigo-600`}
        type={"submit"}
      >
        Login
      </Button>
    </form>
  );
};

export default LoginForm;
