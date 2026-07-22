import { useAuth } from "../../context/AuthContext";
import { CircleDollarSign } from "lucide-react";

const StatsBox = ({ stat }) => {
  const { user } = useAuth();

  return (
    <div className="bg-back-white px-4 py-4 rounded-md border border-gray-200 shadow-sm">
      <div className="flex flex-row items-center justify-between mb-3">
        {stat.icon}
        <div>
          <h5 className="mb-2 font-medium">{stat.title}</h5>
          <p className="font-semibold text-[20px]">
            {stat.amount < 0
              ? `-${user.currency}${Math.abs(stat.amount)}`
              : `${stat.title === "Saving Rate" ? "" : user.currency}${stat.amount}`}
          </p>
        </div>
      </div>
      {/* <div className="flex flex-row justify-between">
        <div>
          <span>12.5%</span>
          <span>from last month</span>
        </div>
        <div>Chart </div>
      </div> */}
    </div>
  );
};

export default StatsBox;
