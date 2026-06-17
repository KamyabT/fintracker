import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside>
      <div>
        <div>logo</div>
        <div>
          <nav>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/transactions">Transactions</Link>
            <Link to="/budget">Budget</Link>
            <Link to="/categories">Categories</Link>
          </nav>
        </div>
        <div>profile</div>
      </div>
    </aside>
  );
};

export default Sidebar;
