import { useAuth } from "../../context/AuthContext";
import { useTransactions } from "../../context/TransactionsContext";
import { isThisMonth } from "date-fns";
import ExpensesCategoryByItem from "./ExpensesByCategoryItem";
import {
  Pie,
  PieChart,
  Sector,
  useActiveTooltipDataPoints,
  useIsTooltipActive,
} from "recharts";

// #endregion
const RADIAN = Math.PI / 180;
// const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const ExpensesByCategory = () => {
  const { user } = useAuth();
  const { allTransactions } = useTransactions();

  console.log(allTransactions, "all");
  const thisMonth = allTransactions?.filter((transaction) =>
    isThisMonth(transaction.transactionDate),
  );

  const sortedBycate = (thisMonth ?? []).reduce((acc, transaction) => {
    const { name, color } = transaction.expand.category;

    if (!acc[name]) {
      acc[name] = {
        amount: 0,
        color,
      };
    }

    acc[name].amount += transaction.amount;

    return acc;
  }, {});

  const finalData = Object.entries(sortedBycate).map(([name, data]) => ({
    name,
    amount: data.amount,
    color: data.color,
  }));

  const totalAmount = finalData.reduce((acc, transaction) => {
    return acc + transaction.amount;
  }, 0);
  /****************Pie Chart******************/

  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }) => {
    if (cx == null || cy == null || innerRadius == null || outerRadius == null) {
      return null;
    }
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const ncx = Number(cx);
    const x = ncx + radius * Math.cos(-(midAngle ?? 0) * RADIAN);
    const ncy = Number(cy);
    const y = ncy + radius * Math.sin(-(midAngle ?? 0) * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > ncx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${((percent ?? 1) * 100).toFixed(0)}%`}
      </text>
    );
  };

  const MyCustomPie = (props) => {
    console.log(props, "sector props");
    const p = useActiveTooltipDataPoints();
    const isAnyPieActive = useIsTooltipActive();
    const isThisPieActive = isAnyPieActive && props.payload === p?.[0];
    let fillOpacity;
    if (isAnyPieActive && !isThisPieActive) {
      fillOpacity = 0.5;
    } else {
      fillOpacity = 1;
    }
    return (
      <Sector
        {...props}
        // fill={COLORS[props.index % COLORS.length]}
        fill={`#${props.color}`}
        fillOpacity={fillOpacity}
        style={{ transition: "fill-opacity 0.3s ease" }}
      />
    );
  };

  return (
    <div className="bg-back-white px-4 py-4 rounded-md flex flex-col shadow-sm">
      <div className="flex flex-row items-center">
        <p className="text-[18px] font-semibold">Expenses by Category</p>
        <span className="ms-2 text-sm text-gray-500">(current Month)</span>
      </div>
      <div className="flex flex-row justify-between items-center">
        <div className="w-full">
          <PieChart
            style={{
              width: "100%",
              maxWidth: "500px",
              maxHeight: "300px",
              aspectRatio: 1,
            }}
            responsive
          >
            <Pie
              data={finalData}
              labelLine={false}
              label={renderCustomizedLabel}
              fill="#8884d8"
              dataKey="amount"
              shape={MyCustomPie}
            />
          </PieChart>
        </div>
        <div className="flex flex-col pe-5">
          <div className="flex flex-col border-b-2 border-gray-200 mb-3 pb-2">
            {finalData?.map((category) => {
              return <ExpensesCategoryByItem data={category} key={category.name} />;
            })}
          </div>
          <div className="flex flex-row w-full justify-between items-center">
            <p className="font-semibold">Total</p>
            <p className="font-semibold">
              {user.currency ? user.currency : "$"}
              {totalAmount}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpensesByCategory;
