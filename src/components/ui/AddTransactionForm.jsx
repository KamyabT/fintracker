import Button from "./Button";
import { DollarSign, MoveUpRight, ArrowDownToLine } from "lucide-react";

const AddTransactionForm = () => {
  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
      <form className="bg-white w-full max-w-lg rounded-lg shadow-lg p-6" action="">
        <div className="space-y-4">
          <div className="flex flex-row justify-between">
            <div className="flex flex-col mb-1">
              <h3 className="font-semibold text-xl mb-1">Add New Transaction</h3>
              <span className="text-gray-500 text-sm font-normal ">
                Record your income or expense.
              </span>
            </div>
            <div className="cursor-pointer">X</div>
          </div>
          <div className="flex flex-row justify-betwen gap-x-8">
            <div className="flex flex-col w-full">
              <label className="font-medium mb-2" htmlFor="">
                Transaction Type
              </label>
              <div className="flex flex-row gap-x-3">
                <Button
                  classesList={`flex items-center justify-center gap-x-2 border w-full rounded-md border-gray-300 py-2 cursor-pointer`}
                  type="button"
                >
                  <ArrowDownToLine size={16} color="red" />
                  Expense
                </Button>
                <Button
                  classesList={`flex items-center justify-center gap-x-2 border w-full rounded-md border-gray-300 py-2 cursor-pointer`}
                  type="button"
                >
                  <MoveUpRight size={16} color="green" />
                  Income
                </Button>
              </div>
            </div>
            <div className="flex flex-col w-full relative">
              <DollarSign className="absolute bottom-3.5 left-2" size={14} />
              <label className="font-medium mb-2" htmlFor="">
                Amount
              </label>
              <input
                type="number"
                className="border border-gray-300 pl-6 py-2 rounded-md outline-none focus:border-primary"
                placeholder="00.0"
              />
            </div>
          </div>
          <div className="flex flex-row justify-betwen gap-x-8">
            <div className="flex flex-col w-full">
              <label className="font-medium mb-2" htmlFor="">
                Category
              </label>
              <select
                className="border border-gray-300 px-3 py-2 rounded-md outline-none focus:border-primary"
                name=""
                id=""
              >
                <option value="">Food & Dinning</option>
              </select>
            </div>
            <div className="flex flex-col w-full">
              <label className="font-medium mb-2" htmlFor="">
                Payment Account
              </label>
              <select
                className="border border-gray-300 px-3 py-2 rounded-md outline-none focus:border-primary"
                name=""
                id=""
              >
                <option value="">Main Wallet</option>
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
            />
          </div>
          <div className="flex flex-row justify-between gap-x-8">
            <div className="flex flex-col w-full">
              <label className="font-medium mb-2" htmlFor="">
                Date
              </label>
              <input
                type="date"
                className="border border-gray-300 px-3 py-2 rounded-md outline-none focus:border-primary"
              />
            </div>
            <div className="flex flex-col w-full">
              <label className="font-medium mb-2" htmlFor="">
                Time
              </label>
              <input
                type="time"
                className="border border-gray-300 px-3 py-2 rounded-md outline-none focus:border-primary"
              />
            </div>
          </div>
          {/* <div>Rec and tags</div> */}
          <div className="flex flex-row justify-end mt-10">
            <Button
              classesList={`bg-gray-300 px-3 py-2 rounded-lg me-3 cursor-pointer hover:bg-red-500 hover:text-white`}
            >
              Cancel
            </Button>
            <Button
              classesList={`bg-gray-300 px-3 py-2 rounded-lg cursor-pointer hover:bg-primary hover:text-white`}
            >
              Save Transaction
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddTransactionForm;
