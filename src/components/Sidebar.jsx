import { Link , useNavigate} from "react-router-dom";
import style from "./Sidebar.module.css";
import {
  House,
  ArrowLeftRight,
  ChartPie,
  LayoutGrid,
  User,
  Settings,
  LogOut,
} from "lucide-react";
import LogoLight from "../assets/Logo-Light.png";
import { useAuth } from "../context/AuthContext";
import Button from "./ui/Button";
import toast from "react-hot-toast";

const Sidebar = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  function handleLogOut() {
    logout();
    toast.success("You have successfully logged out, see you soon!")
    navigate("/");
  }

  return (
    <aside className={`bg-back-sidebar-primary ${style.aside}`}>
      <div className="flex flex-col justify-between h-screen p-3">
        <div className="">
          <div className="flex items-center justify-center my-5">
            <img
              src={LogoLight}
              alt=""
              className="flex items-center justify-center h-14"
            />
          </div>
          <nav className="flex flex-col w-full gap-y-3">
            <Link
              className="flex space-x-3 py-3 px-4 text-white hover:bg-back-sidebar-hover hover:rounded-md w-full font-normal"
              to="/dashboard"
            >
              <House className="flex justify-center items-center" />
              Dashboard
              <span></span>
            </Link>
            <Link
              className="flex space-x-3 py-3 px-4 text-white hover:bg-back-sidebar-hover hover:rounded-md"
              to="/transactions"
            >
              <ArrowLeftRight className="" />
              <span>Transactions</span>
            </Link>
            <Link
              className="flex space-x-3 py-3 px-4 text-white hover:bg-back-sidebar-hover hover:rounded-md"
              to="/budget"
            >
              <ChartPie className="" />
              <span>Budget</span>
            </Link>
            <Link
              className="flex space-x-3 py-3 px-4 text-white hover:bg-back-sidebar-hover hover:rounded-md"
              to="/categories"
            >
              <LayoutGrid className="" />
              <span>Categories</span>
            </Link>
            <Link
              className="flex space-x-3 py-3 px-4 text-white hover:bg-back-sidebar-hover hover:rounded-md"
              to="/profile"
            >
              <User className="" />
              <span>Profile</span>
            </Link>
          </nav>
        </div>
        <nav>
          <Link
            className="flex space-x-3 py-3 px-4 text-white hover:bg-back-sidebar-hover hover:rounded-md"
            to="/profile"
          >
            <Settings className="" />
            <span>Settings</span>
          </Link>
          <Button
            classesList="flex space-x-3 py-3 px-4 text-white hover:bg-back-sidebar-hover hover:rounded-md w-full cursor-pointer"
            onClick={handleLogOut}
          >
            <LogOut className="" />
            <span>Logout</span>
          </Button>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
