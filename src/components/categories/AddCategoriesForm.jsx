import { DollarSign, MoveUpRight, ArrowDownToLine, CircleX } from "lucide-react";
import { useForm } from "react-hook-form";
import Button from "../ui/Button";

const AddCategoriesForm = () => {
  const { register, handleSubmit, watch, setValue } = useForm({
    defaultValues: {
      type: "expense",
    },
  });
  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
      <form className="bg-white w-full max-w-xl rounded-lg shadow-lg p-6">
        <div className="space-y-4">
          <div className="flex flex-row justify-between">
            <div className="flex flex-col mb-1">
              <h3 className="font-semibold text-xl mb-1">
                {/* {isEditing ? "Editing transaction" : "Add New Transaction"} */}
                Add New Category
              </h3>
              <span className="text-gray-500 text-sm font-normal ">
                {/* {isEditing ? "" : "Record your income or expense."} */}
                Create a new category to track your transactions
              </span>
            </div>
            <div className="cursor-pointer">
              <CircleX color="red" />
            </div>
          </div>
          <div className="flex flex-row justify-betwen gap-x-6">
            <div className="flex flex-col w-full">
              <label className="font-medium mb-2" htmlFor="">
                Category Name
              </label>
              <input
                className="border border-gray-300 px-3 py-2 rounded-md outline-none focus:border-primary"
                type="text"
                placeholder="Category Name"
                {...register("categoryName", {
                  required: "Category Name is required",
                })}
              />
            </div>
            <div className="flex flex-col w-full">
              <label className="font-medium mb-2" htmlFor="">
                Type
              </label>
              <select
                className="border border-gray-300 px-3 py-2 rounded-md outline-none focus:border-primary"
                placeholder="Select Type"
                name=""
                id=""
                {...register("transactionName", {
                  required: "Transaction Name is required",
                })}
              >
                <option value="">1</option>
                <option value="">2</option>
                <option value="">3</option>
                <option value="">4</option>
              </select>
            </div>
          </div>
          <div className="flex flex-row justify-betwen gap-x-6">
            <div className="flex flex-col w-full">
              <label className="font-medium mb-2" htmlFor="">
                Icon
              </label>
              <select
                className="border border-gray-300 px-3 py-2 rounded-md outline-none focus:border-primary"
                name=""
                id=""
                {...register("categoryIcon")}
              >
                {/* {allCategories?.items.map((category) => {
                  return <option value={`${category.id}`}>{category.name}</option>;
                })} */}
              </select>
            </div>
            <div className="flex flex-col w-full">
              <label className="font-medium mb-2" htmlFor="">
                Color
              </label>
              <select
                className="border border-gray-300 px-3 py-2 rounded-md outline-none focus:border-primary"
                name=""
                id=""
                {...register("categoryColor")}
              >
                <option value="mainWallet">Main Wallet</option>
              </select>
            </div>
          </div>
          <div className="flex flex-col">
            <label className="font-medium mb-2" htmlFor="description">
              Description
            </label>
            <input
              className="border border-gray-300 outline-none w-full rounded-md px-3 py-2 focus:border-primary"
              type="text"
              placeholder="What was this transaction for?"
              {...register("description")}
            />
          </div>
          {/* <div>Rec and tags</div> */}
          <div className="flex flex-row justify-end mt-10">
            <Button
              classesList={`bg-gray-300 px-3 py-2 rounded-lg me-3 cursor-pointer hover:bg-red-500 hover:text-white`}
            >
              Cancel
            </Button>
            <Button
              classesList={`bg-gray-300 px-3 py-2 rounded-lg cursor-pointer bg-primary text-white hover:bg-back-success-dark hover:text-white`}
              type="submit"
            >
              Create Categotry
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddCategoriesForm;
