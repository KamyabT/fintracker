import {
  Pie,
  PieChart,
  Sector,
  useActiveTooltipDataPoints,
  useIsTooltipActive,
} from "recharts";

// #region Sample data
const data = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
];

// #endregion
const RADIAN = Math.PI / 180;
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const ExpensesByCategory = () => {
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
        fill={COLORS[props.index % COLORS.length]}
        fillOpacity={fillOpacity}
        style={{ transition: "fill-opacity 0.3s ease" }}
      />
    );
  };

  return (
    <div className="bg-back-white px-4 py-4 rounded-md flex flex-col shadow-sm">
      <div>
        <p className="text-[18px] font-semibold">Expenses by Category</p>
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
              data={data}
              labelLine={false}
              label={renderCustomizedLabel}
              fill="#8884d8"
              dataKey="value"
              // isAnimationActive={isAnimationActive}
              shape={MyCustomPie}
            />
          </PieChart>
        </div>
        <div className="flex flex-col pe-5">
          <div className="flex flex-col border-b-1 border-gray-100 mb-2 pb-2">
            <div className="flex flex-row w-full space-x-5">
              <span>0</span>
              <p>Housing</p>
              <p>$1,250.00</p>
              <p>40%</p>
            </div>
            <div className="flex flex-row  w-full space-x-5">
              <span>0</span>
              <p>Housing</p>
              <p>$1,250.00</p>
              <p>40%</p>
            </div>
            <div className="flex flex-row  w-full space-x-5">
              <span>0</span>
              <p>Housing</p>
              <p>$1,250.00</p>
              <p>40%</p>
            </div>
            <div className="flex flex-row w-full space-x-5">
              <span>0</span>
              <p>Housing</p>
              <p>$1,250.00</p>
              <p>40%</p>
            </div>
            <div className="flex flex-row w-full space-x-5">
              <span>0</span>
              <p>Housing</p>
              <p>$1,250.00</p>
              <p>40%</p>
            </div>
          </div>
          <div className="flex flex-row w-full justify-between items-center">
            <p>Total</p>
            <p>$3,120.50</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpensesByCategory;
