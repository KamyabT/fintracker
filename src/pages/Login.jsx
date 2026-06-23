import LoginForm from "../components/ui/LoginForm";
import { Link } from "react-router-dom";
import Logo from "../assets/loginAside.png";
import googleLogo from "../assets/google.png";
import appleLogo from "../assets/apple.png";
import { ShieldCheck } from "lucide-react";

const Login = () => {
  return (
    <main className="flex flex-row h-screen p-5 bg-back-secondary font-sans">
      <section className="hidden h-full md:block md:w-1/3">
        <img
          src={Logo}
          alt="Login Aside"
          className="h-full w-full object-cover rounded-l-lg"
        />
      </section>
      <section className="flex p-7 flex-col items-center justify-center h-full bg-back-primary rounded-r-lg w-full">
        <div className="flex flex-row flex-none justify-end w-full">
          {/* <div>Dark Mode</div> */}
          <div className="flex flex-row">
            <span className="text-gray-600 font-medium font-sans me-2">
              Don't have an account?
            </span>
            <Link to="/register" className="font-medium text-indigo-500">
              Sign up
            </Link>
          </div>
        </div>
        <div className="flex flex-col flex-1 justify-center items-center px-10 w-full">
          <div className="w-full max-w-lg">
            <h2 className="font1 text-4xl font-semibold mb-2">Welcome back!</h2>
            <p className="font-normal text-gray-400">
              Please login to your account to continue.
            </p>
            <LoginForm />
          </div>
          <div className="flex items-center flex-row w-full max-w-lg mt-5">
            <div className="flex-1 border-t border-gray-200"></div>
            <span className="px-4 text-sm text-gray-400">or continue with</span>
            <div className="flex-1 border-t border-gray-200"></div>
          </div>
          <div className="flex flex-row justify-between mt-5 max-w-lg w-full">
            <button className="w-full flex flex-row items-center justify-center me-2 border border-gray-300 text-gray-500 font-medium py-3 rounded-md cursor-pointer hover:bg-indigo-200 hover:text-gray-700">
              <img src={googleLogo} alt="" className="h-5 me-4" />
              Continue with Google
            </button>
            <button className="w-full flex flex-row items-center justify-center ms-2 border border-gray-300 text-gray-500 font-medium py-3 rounded-md cursor-pointer hover:bg-indigo-200 hover:text-gray-700">
              <img src={appleLogo} alt="" className="h-5 me-4" />
              Continue with apple
            </button>
          </div>
        </div>
        <div className="flex flex-row mb-5">
          <ShieldCheck className="me-2" color="gray" />
          <p className="text-1xl text-gray-500 font-medium">
            Your data is secure and encrypted.
          </p>
        </div>
      </section>
    </main>
  );
};

export default Login;
