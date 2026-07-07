import { useAuth } from "../../context/AuthContext";

const ExpensesCategoryByItem = ({ data, total }) => {
  const { user } = useAuth();

  return (
    <div className="flex flex-row w-full items-center justify-between space-x-10 py-2">
      <span
        className="h-2 w-2 rounded-full"
        style={{ backgroundColor: `#${data.color}` }}
      ></span>
      <p className="flex flex-start w-20 font-medium text-[14px] text-black-500">
        {data.name}
      </p>
      <p className="flex font-medium text-[14px] text-black-500">
        {user.currency ? user.currency : "$"}
        {data.amount}
      </p>
      <p className="flex font-medium items-center text-[13px] text-black-500">
        %{((data.amount / total)*100).toFixed(0)}
      </p>
    </div>
  );
};

export default ExpensesCategoryByItem;
