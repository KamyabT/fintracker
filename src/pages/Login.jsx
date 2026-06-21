import LoginForm from "../components/ui/LoginForm";
import Logo from "../assets/loginAside.png";

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
      <section className="flex flex-col items-center justify-center h-full bg-back-primary rounded-r-lg w-full">
        <div className="flex flex-row flex-none justify-end w-full">
          <div>Dark Mode</div>
          <div className="flex flex-row">
            <span className="text-gray-600 font-sans">Don't have an account?</span>
            <a href="/register" className="text-blue-500">
              Sign up
            </a>
          </div>
        </div>
        <div className="flex flex-col flex-1 justify-center px-10 w-full">
          <div className="flex flex-col items-start self-start mb-5">
            <h2 className="font1 text-4xl font-bold mb-2">Welcome back!</h2>
            <p>Please login to your account to continue.</p>
          </div>
          <div className="w-full max-w-lg">
            <LoginForm />
          </div>
          <div>SSO</div>
          <div>
            <p>Your data is secure and encrypted.</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Login;
