import { Link } from "react-router-dom";
import style from "./Sidebar.module.css";

const Sidebar = () => {
  return (
    <aside className={style.aside}>
      <div className="flex flex-col justify-between h-screen">
        <div>
          <div>logo</div>
          <nav className="flex flex-col">
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/transactions">Transactions</Link>
            <Link to="/budget">Budget</Link>
            <Link to="/categories">Categories</Link>
            <Link to="/profile">Profile</Link>
          </nav>
        </div>
        <div>profile</div>
      </div>
    </aside>
  );
};

export default Sidebar;
