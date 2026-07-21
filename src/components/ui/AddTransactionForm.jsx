import { useTransactions } from "../../context/TransactionsContext";
import { useForm } from "react-hook-form";
import { format } from "date-fns";
import Button from "./Button";
import { DollarSign, MoveUpRight, ArrowDownToLine, CircleX } from "lucide-react";

const AddTransactionForm = () => {
  const {
    categories,
    closeModal,
    transactionToEdit,
    handleUpdateTransaction,
    handleAddTransaction,
  } = useTransactions();

  const isEditing = !!transactionToEdit;

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      transactionName: transactionToEdit?.transactionName || "",
      amount: transactionToEdit?.amount || "",
      type: transactionToEdit?.type || "",
      category: transactionToEdit?.category || "", // ID not name!
      date: transactionToEdit
        ? format(new Date(transactionToEdit.transactionDate), "yyyy-MM-dd")
        : "",
      time: transactionToEdit
        ? format(new Date(transactionToEdit.transactionDate), "HH:mm")
        : "",
      description: transactionToEdit?.description || "",
      paymentAccount: transactionToEdit?.paymentAccount || "mainWallet",
    },
  });

  const selectedType = watch("type");
  const userId = JSON.parse(localStorage.getItem("user")).id;

  async function onSubmit(data) {
    const transactionDate = new Date(`${data.date}T${data.time}`).toISOString();
    const finalData = {
      ...data,
      user: userId,
      transactionDate,
      id: transactionToEdit?.id,
    };

    if (isEditing) {
      await handleUpdateTransaction(finalData);
    } else {
      await handleAddTransaction(finalData);
    }
  }

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
      <form
        className="bg-white w-full max-w-xl rounded-lg shadow-lg p-6"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="space-y-4">
          <div className="flex flex-row justify-between">
            <div className="flex flex-col mb-1">
              <h3 className="font-semibold text-xl mb-1">
                {isEditing ? "Edit Transaction" : "Add New Transaction"}
              </h3>
              <span className="text-gray-500 text-sm font-normal">
                {isEditing
                  ? "Update transaction details."
                  : "Record your income or expense."}
              </span>
            </div>
            <div className="cursor-pointer" onClick={closeModal}>
              <CircleX color="red" />
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-row justify-between">
              <label className="font-medium mb-2">Transaction Name</label>
              {errors.transactionName && (
                <p className="text-state--danger mt-1 text-[13px]">
                  {errors.transactionName.message}
                </p>
              )}
            </div>
            <input
              className="border border-gray-300 px-3 py-2 rounded-md outline-none focus:border-primary"
              type="text"
              placeholder="Transaction Name"
              {...register("transactionName", {
                required: "Transaction Name is required",
              })}
            />
          </div>
          <div className="flex flex-row gap-x-6">
            <div className="flex flex-col w-full">
              <div className="flex flex-row justify-between">
                <label className="font-medium mb-2">Transaction Type</label>
                {errors.type && (
                  <p className="text-state--danger mt-1 text-[13px]">
                    {errors.type.message}
                  </p>
                )}
              </div>
              <div className="flex flex-row gap-x-3">
                <Button
                  classesList={`flex items-center justify-center gap-x-2 border w-full rounded-md border-gray-300 py-2 cursor-pointer font-medium ${selectedType === "Expense" ? "bg-red-100 text-red-500 border-red-500" : ""}`}
                  type="button"
                  onClick={() => setValue("type", "Expense")}
                >
                  <ArrowDownToLine size={16} color="red" />
                  Expense
                </Button>
                <Button
                  classesList={`flex items-center justify-center gap-x-2 border w-full rounded-md border-gray-300 py-2 cursor-pointer font-medium ${selectedType === "Income" ? "bg-green-100 text-green-500 border-green-500" : ""}`}
                  type="button"
                  onClick={() => setValue("type", "Income")}
                >
                  <MoveUpRight size={16} color="green" />
                  Income
                </Button>
                <input type="hidden" {...register("type", { required: true })} />
              </div>
            </div>
            <div className="flex flex-col w-full relative">
              <DollarSign className="absolute bottom-3.5 left-2" size={14} />
              <div className="flex flex-row justify-between">
                <label className="font-medium mb-2">Amount</label>
                {errors.amount && (
                  <p className="text-state--danger mt-1 text-[13px]">
                    {errors.amount.message}
                  </p>
                )}
              </div>

              <input
                type="number"
                className="border border-gray-300 pl-6 py-2 rounded-md outline-none focus:border-primary"
                placeholder="0.00"
                {...register("amount", { required: "Amount is required" })}
              />
            </div>
          </div>
          <div className="flex flex-row gap-x-6">
            <div className="flex flex-col w-full">
              <label className="font-medium mb-2">Category</label>
              <select
                className="border border-gray-300 px-3 py-2 rounded-md outline-none focus:border-primary"
                {...register("category", { required: "Category is required" })}
              >
                {categories?.items?.map((category) => (
                  <option value={category.id} key={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col w-full">
              <div className="flex flex-row justify-between">
                <label className="font-medium mb-2">Payment Account</label>
                {errors.paymentAccount && (
                  <p className="text-state--danger mt-1 text-[13px]">
                    {errors.paymentAccount.message}
                  </p>
                )}
              </div>
              <select
                className="border border-gray-300 px-3 py-2 rounded-md outline-none focus:border-primary"
                {...register("paymentAccount", {
                  required: "Payment Account is required",
                })}
              >
                <option value="mainWallet">Main Wallet</option>
              </select>
            </div>
          </div>
          <div className="flex flex-col">
            <label className="font-medium mb-2">Description</label>
            <input
              className="border border-gray-300 outline-none w-full rounded-md px-3 py-2 focus:border-primary"
              type="text"
              placeholder="What was this transaction for?"
              {...register("description")}
            />
          </div>
          <div className="flex flex-row gap-x-6">
            <div className="flex flex-col w-full">
              <div className="flex flex-row justify-between">
                <label className="font-medium mb-2">Date</label>
                {errors.date && (
                  <p className="text-state--danger mt-1 text-[13px]">
                    {errors.date.message}
                  </p>
                )}
              </div>
              <input
                type="date"
                className="border border-gray-300 px-3 py-2 rounded-md outline-none focus:border-primary"
                {...register("date", { required: "Date is required" })}
              />
            </div>
            <div className="flex flex-col w-full">
              <div className="flex flex-row justify-between">
                <label className="font-medium mb-2">Time</label>
                {errors.time && (
                  <p className="text-state--danger mt-1 text-[13px]">
                    {errors.time.message}
                  </p>
                )}
              </div>
              <input
                type="time"
                className="border border-gray-300 px-3 py-2 rounded-md outline-none focus:border-primary"
                {...register("time", { required: "Time is required" })}
              />
            </div>
          </div>
          <div className="flex flex-row justify-end mt-10">
            <Button
              classesList="bg-gray-300 px-3 py-2 rounded-lg me-3 cursor-pointer hover:bg-red-500 hover:text-white"
              onClick={closeModal}
              type="button"
            >
              Cancel
            </Button>
            <Button
              classesList="bg-gray-300 px-3 py-2 rounded-lg cursor-pointer hover:bg-primary hover:text-white"
              type="submit"
            >
              {isEditing ? "Update Transaction" : "Save Transaction"}
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddTransactionForm;
