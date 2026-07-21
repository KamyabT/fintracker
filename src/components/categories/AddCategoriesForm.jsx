import { CircleX } from "lucide-react";
import { useForm } from "react-hook-form";
import Button from "../ui/Button";
import { addNewCategory } from "../../services/transactions";
import { colorGenerator } from "../../configs/colorGenerator";

const AddCategoriesForm = ({ setShowCategoryForm }) => {
  const { register, handleSubmit, watch, setValue } = useForm({
    defaultValues: {
      type: "expense",
    },
  });

  async function onSubmit(data) {
    try {
      const result = await addNewCategory(data);
    } catch (error) {
      console.log(error);
    }
  }

  function handleCloseCategoryForm() {
    setShowCategoryForm(false);
  }

  const colors = colorGenerator();

  console.log(colors);

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white w-full max-w-xl rounded-lg shadow-lg p-6"
      >
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
            <div className="cursor-pointer" onClick={handleCloseCategoryForm}>
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
                {...register("name", {
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
                {...register("type", {
                  required: "Type is required",
                })}
              >
                <option value="Income">Income</option>
                <option value="Expense">Expense</option>
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
                <option value="1">1</option>
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
                {...register("color")}
              >
                {colors.map((color) => {
                  return <option value={color} key={color}>{color}</option>;
                })}
              </select>
            </div>
          </div>
          <div className="flex flex-col">
            <label className="font-medium mb-2" htmlFor="description">
              Description
              <span className="font-medium text-[12px] text-gray-500 ms-1">
                (optional)
              </span>
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
              onClick={handleCloseCategoryForm}
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
