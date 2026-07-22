import Button from "../ui/Button";

const CategoriesListItem = ({ cate }) => {
  return (
    <div className="grid grid-cols-[1fr_1fr_0.5fr_1fr_1fr] border-b-1 border-gray-100 py-3 mb-0">
      <div className="flex items-center font-semibold">{cate.name}</div>
      <div className="flex items-center">
        <span
          className={`${cate?.type === "Income" ? "bg-back-success text-state--success" : "bg-back-danger text-state--danger"} font-bold flex text-[12px] items-center px-2 py-1 rounded-lg`}
        >
          {cate.type}
        </span>
      </div>
      <div className="flex items-center">{cate.icon}</div>
      <div className="flex items-center">
        <span
          className={`flex rounded-full`}
          style={{
            height: "10px",
            width: "10px",
            backgroundColor: `#${cate.color}`,
          }}
        ></span>
      </div>
      <div className="flex items-center">
        <Button
          classesList={`me-3 px-3 py-2 border border-gray-300 rounded-lg text-primary font-semibold text-[14px] cursor-pointer`}
        >
          Edit
        </Button>
        <Button
          classesList={`bg-back-danger-dark text-white px-3 py-2 border border-gray-300 rounded-lg  font-semibold text-[14px] cursor-pointer`}
        >
          Delete
        </Button>
      </div>
    </div>
  );
};

export default CategoriesListItem;
