import { useForm } from "react-hook-form";

import {Mail , LockKeyhole , ShieldCheck} from "lucide-react";

const LoginForm = () => {
  return (
    <form className="flex flex-col grow w-full space-y-4 mt-4">
      <div className="relative">
        <label className="font-medium" htmlFor="email">
          Email address
        </label>
        <Mail className="absolute bottom-4 left-3" color="gray" size={18}/>
        <input
          className="w-full mt-2 px-4 py-3 ps-10 outline-none border border-gray-300 appearance-none rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-transparent placeholder-gray-400"
          type="email"
          placeholder="you@example.com"
        />
      </div>
      <div className="relative mt-3">
        <label className="font-medium" htmlFor="password">
          Password
        </label>
        <LockKeyhole className="absolute bottom-4 left-3" color="gray" size={18}/>
        <input
          className="w-full mt-2 px-4 py-3 ps-10 outline-none border border-gray-300 appearance-none rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-transparent placeholder-gray-400"
          type="password"
          placeholder="••••••••"
        />
      </div>
      <div className="flex flex-row justify-between">
        <div className="flex flex-row items-center gap-2">
          <input type="checkbox" id="remember" />
          <label htmlFor="remember">Remember me</label>
        </div>
        <div className="text-indigo-500">Forgot password?</div>
      </div>
      <button
        className="w-full py-3 px-4 rounded-lg font-semibold text-white cursor-pointer transition hover:bg-indigo-700 bg-indigo-600"
        type="submit"
      >
        Login
      </button>
    </form>
  );
};

export default LoginForm;
