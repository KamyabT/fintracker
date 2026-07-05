import { CircleArrowDown, CircleArrowUp } from "lucide-react";
import { format } from "date-fns";
import { useAuth } from "../../context/AuthContext";

const RecentTransactionsItem = ({ transaction }) => {
  const { transactionName, category, transactionDate, type, amount } = transaction;
  const { user } = useAuth();

  // console.log(transaction);
  // console.log(transactionDate);
  // console.log(new Date(transactionDate));
  // console.log(new Date(transactionDate).getTime());
  // console.log(JSON.stringify(transactionDate));

  return (
    <div className="grid grid-cols-[50px_1fr_1fr_1.5fr_1fr_1fr] border-b-1 border-gray-100 py-2">
      <div className="flex items-center">
        {type === "Income" ? (
          <CircleArrowUp color="#2bc417" size={32} />
        ) : (
          <CircleArrowDown color="#c41717" size={32} />
        )}
      </div>
      <div className="flex flex-col justify-start  col-start-2 col-end-4 ">
        <p className="font-semibold">{transactionName}</p>
        <span className="font-semibold text-sm text-gray-500">{category}</span>
      </div>
      <div className="flex flex-row justify-center space-x-3">
        <span className="font-medium text-[14px] flex items-center text-gray-500">
          {format(new Date(transactionDate), "hh:mm a")}
        </span>
        <span className="font-medium text-[14px] flex items-center text-gray-500">
          {format(new Date(transactionDate), "MMM d, y")}
        </span>
      </div>
      <div className="flex justify-center items-center">
        <span
          className={`${type === "Income" ? "bg-back-success text-state--success" : "bg-back-danger text-state--danger"} font-bold flex text-[12px] items-center px-2 py-1 rounded-lg`}
        >
          {type}
        </span>
      </div>
      <div className="flex justify-end ">
        <span
          className={`${type === "Income" ? "text-state--success" : "text-state--danger"} font-bold text-[18px] flex items-center rounded-md`}
        >
          {type === "Income" ? "+" : "-"}
          {user?.currency || "$"}
          {amount.toFixed(2)}
        </span>
      </div>
    </div>
  );
};

export default RecentTransactionsItem;
