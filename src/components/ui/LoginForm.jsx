import { useForm } from "react-hook-form";

const LoginForm = () => {
  return (
    <form className="flex flex-col grow">
      <label htmlFor="email">Email</label>
      <input
        className="w-100 px-4 py-2 outline-none border border-gray-300 appearance-none rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-transparent placeholder-gray-400"
        type="email"
        placeholder="you@example.com"
      />
      <label className="" htmlFor="password">Password</label>
      <input
        className="w-100 px-4 py-2 outline-none border border-gray-300 appearance-none rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-transparent placeholder-gray-400"
        type="password bg-white"
        placeholder="••••••••"
      />
      <div className="flex flex-row justify-between">
        <div className="flex flex-row items-center gap-2">
          <input type="checkbox" id="remember" />
          <label htmlFor="remember">Remember me</label>
        </div>
        <div>Forgot password?</div>
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
