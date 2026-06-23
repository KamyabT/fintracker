import { useForm } from "react-hook-form";
import { Mail, LockKeyhole } from "lucide-react";
import { registerUser } from "../../services/auth";
import { useNavigate } from "react-router-dom";

import Button from "./Button";
import toast from "react-hot-toast";

const RegisterForm = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();

  async function onRegister(data) {
    try {
      console.log("form data", data);
      const registering = await registerUser(data);
      console.log("registering", registering);
      if (registering.status !== 200) {
        toast.error(`Failed to create your account`);
      } else {
        toast.success("Your account created successfully, redirecting to dashboard");
        navigate("/dashboard");
      }
    } catch (error) {
      toast.error(`Failed to create your account, error ${error.name}`);
    }
  }

  return (
    <form
      className="flex flex-col grow w-full space-y-4 mt-4"
      onSubmit={handleSubmit(onRegister)}
    >
      <div className="relative">
        <div className="flex flex-row items-center justify-between">
          <label className="font-medium" htmlFor="fullName">
            Full Name
          </label>
          {errors.fullName && (
            <p className="text-red-500 text-sm">{errors.fullName.message}</p>
          )}
        </div>
        <Mail className="absolute bottom-4 left-3" color="gray" size={18} />
        <input
          className="w-full mt-2 px-4 py-3 ps-10 outline-none border border-gray-300 appearance-none rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-transparent placeholder-gray-400"
          id="fullName"
          type="text"
          placeholder="John Doe"
          {...register("fullName", {
            required: "Full name is required",
          })}
        />
      </div>
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
      <div className="relative">
        <div className="flex flex-row items-center justify-between">
          <label className="font-medium" htmlFor="passwordConfirm">
            Confirm Password
          </label>
          {errors.passwordConfirm && (
            <p className="text-red-500 text-sm ">{errors.passwordConfirm.message}</p>
          )}
        </div>
        <LockKeyhole className="absolute bottom-4 left-3" color="gray" size={18} />
        <input
          className="w-full mt-2 px-4 py-3 ps-10 outline-none border border-gray-300 appearance-none rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-transparent placeholder-gray-400"
          id="passwordConfirm"
          type="password"
          placeholder="••••••••"
          {...register("passwordConfirm", {
            required: "Confirm password is required",
            validate: (match) => {
              const password = getValues("password");
              return match === password || "Password should match!";
            },
          })}
        />
      </div>
      <div className="flex flex-row justify-between">
        <div className="flex flex-row items-center gap-2">
          <input type="checkbox" id="remember" />
          <label htmlFor="remember">
            I agree to the Terms of Service and Privacy Policy
          </label>
        </div>
      </div>
      <Button
        classesList={`w-full py-3 px-4 rounded-lg font-semibold text-white cursor-pointer transition hover:bg-indigo-700 bg-indigo-600`}
      >
        Sign Up
      </Button>
    </form>
  );
};

export default RegisterForm;
