import { useTransactions } from "../../context/TransactionsContext";
import { Bar, BarChart, XAxis, YAxis, CartesianGrid } from "recharts";


const data = [
  {
    name: "Page A",
    uv: 40,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page A",
    uv: 400,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page A",
    uv: 60,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page A",
    uv: 500,
    pv: 5400,
    amt: 2400,
  },
  {
    name: "Page A",
    uv: 400,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page A",
    uv: 100,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page A",
    uv: 400,
    pv: 2400,
    amt: 2400,
  },

  {
    name: "Page B",
    uv: 300,
    pv: 4567,
    amt: 2400,
  },
  {
    name: "Page C",
    uv: 300,
    pv: 1398,
    amt: 2400,
  },
  {
    name: "Page D",
    uv: 200,
    pv: 9800,
    amt: 2400,
  },
  {
    name: "Page E",
    uv: 278,
    pv: 3908,
    amt: 2400,
  },
  {
    name: "Page F",
    uv: 189,
    pv: 4800,
    amt: 2400,
  },
];

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
  console.log("allTransactions", allTransactions);


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
            <option value="month">May 2026</option>
            <option value="week">May 2026</option>
            <option value="day">May 2026</option>
          </select>
        </div>
      </div>
      <div className="">
        <BarChart width="w-full" height={300} data={data} margin={margin}>
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
          <Bar dataKey="uv" fill="#4338ca" label={renderCustomBarLabel} barSize={25} />
          {/* <RechartsDevtools /> */}
        </BarChart>
      </div>
    </div>
  );
};

export default ExpensesOverview;
