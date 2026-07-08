import Button from "./ui/Button";
import { Bell } from "lucide-react";
import { useAuth } from "../context/AuthContext";
import { useTransactions } from "../context/TransactionsContext";

const Header = () => {
  const { user } = useAuth();
  const { add, setAdd } = useTransactions();

  function handleAddNewtrans() {
    setAdd(true);
  }
  return (
    <header className="mb-5">
      <div className="flex flex-row flex-wrap justify-between ">
        <div className="flex flex-col mb-3 md:mb-0">
          <h3 className="font-semibold text-xl mb-1">
            Good morning, {user?.name || "Guest"}👋
          </h3>
          <span className="text-gray-500 text-sm font-normal">
            Here's what's happening with your finances today.
          </span>
        </div>
        <div className="flex flex-row items-center">
          <Button
            classesList="bg-primary text-white px-4 py-2 rounded-lg font-normal text-[14px] hover:bg-primary-dark cursor-pointer me-4"
            onClick={handleAddNewtrans}
            type="button"
          >
            + Add Transaction
          </Button>
          <div className="flex items-center justify-center me-4 cursor-pointer">
            <Bell />
          </div>
          <div className="flex flex-row items-center pe-2">
            <img src="#" alt="" />
            <p className="font-semibold me-2">{user?.name || "Guest"}</p>
            <span>+</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
