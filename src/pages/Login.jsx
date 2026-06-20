import LoginForm from "../components/ui/LoginForm";

const Login = () => {
  return (
    <main className="flex flex-row h-screen p-5 bg-back-secondary font-sans">
      <section className="hidden  h-full bg-primary rounded-l md:block md:w-1/3">
        <img src="./loginAside.png" alt="Login Aside" className="w-full" />
      </section>
      <section className="flex flex-col items-center justify-center w-full h-full bg-back-primary rounded-r md:w-2/3  ">
        <div className="flex flex-row">
          <div>Dark Mode</div>
          <div className="flex flex-row">
            <span className="text-gray-600 font-sans">Don't have an account?</span>
            <a href="/register" className="text-blue-500">
              Sign up
            </a>
          </div>
          <div></div>
        </div>
        <div>
          <h2>Welcome back!</h2>
          <p>Please login to your account to continue.</p>
        </div>
        <div>
          <LoginForm />
        </div>
        <div>SSO</div>
        <div>
          <p>Your data is secure and encrypted.</p>
        </div>
      </section>
    </main>
  );
};

export default Login;
