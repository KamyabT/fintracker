import { useTransactions } from "../../context/TransactionsContext";
import { Bar, BarChart, XAxis, YAxis, CartesianGrid } from "recharts";
import { isThisMonth, eachDayOfInterval, startOfMonth, lastDayOfMonth, getMonth , format } from "date-fns";

const margin = {
  top: 20,
  right: 30,
  left: 20,
  bottom: 25,
};

const formatAxisTick = (value) => {
  return `${value}`;
};

const renderCustomBarLabel = ({ x, y, width, value }) => {
  return (
    <text
      x={x + width / 2}
      // y={y}
      fill="#666"
      textAnchor="middle"
      dy={-6}
    >{`value: ${value}`}</text>
  );
};

const ExpensesOverview = () => {
  const { allTransactions } = useTransactions();
  /***************************/

  let start = startOfMonth(new Date());
  let end = lastDayOfMonth(new Date());

  const thisMonthTransactions = allTransactions?.filter(
    (transaction) =>
      isThisMonth(new Date(transaction.transactionDate)) &&
      transaction.type === "Expense",
  );

  const ExpensesByDay = thisMonthTransactions.reduce((acc, transaction) => {
    const transactionDay = new Date(transaction.transactionDate).getDate();
    acc[transactionDay] = (acc[transactionDay] || 0) + transaction.amount;
    return acc;
  }, {});

  const barData = eachDayOfInterval({ start, end }).map((day) => ({
    name: day.getDate(),
    amount: ExpensesByDay[day.getDate()] || 0,
  }));

  return (
    <div className="bg-back-white space-y-6 px-4 py-4 rounded-md shadow-sm">
      <div className="flex flex-row justify-between items-center">
        <div>
          <span className="text-[18px] font-semibold">Expenses Overview</span>
          <span className="ms-2 text-sm text-gray-500">(This Month)</span>
        </div>
        <div>
          <select
            className="font-normal border px-2 py-1 border-gray-300 outline-none rounded-md"
            name=""
            id=""
          >
            <option value="month">{format((new Date()), "MMMM , yyy")}</option>
            {/* <option value="week">May 2026</option>
            <option value="day">May 2026</option> */}
          </select>
        </div>
      </div>
      <div className="">
        <BarChart width="w-full" height={300} data={barData} margin={margin}>
          <XAxis
            dataKey="name"
            tickFormatter={formatAxisTick}
            label={{ position: "insideBottomRight", value: "", offset: -10 }}
          />
          <YAxis
            label={{
              position: "insideTopLeft",
              value: "",
              angle: -90,
              dy: 60,
            }}
          />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <Bar
            dataKey="amount"
            fill="#4338ca"
            label={renderCustomBarLabel}
            barSize={25}
          />
        </BarChart>
      </div>
    </div>
  );
};

export default ExpensesOverview;
