import Button from "./Button";

const AddTransactionForm = () => {
  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
      <form className="bg-white w-full max-w-lg rounded-lg shadow-lg p-6" action="">
        <div>
          <div>
            <div className="flex flex-col mb-1">
              <h3 className="font-semibold text-xl mb-1">Add New Transaction</h3>
              <span className="text-gray-500 text-sm font-normal">
                Record your income or expense.
              </span>
            </div>
            <div></div>
          </div>
          <div>
            <div>
              <label htmlFor="">Transaction Type</label>
              <select name="" id="">
                <option value="">Food & Dinning</option>
              </select>
            </div>
            <div>
              <label htmlFor="">Amount</label>
              <input type="number" />
            </div>
          </div>
          <div>
            <div>
              <label htmlFor="">Category</label>
              <select name="" id="">
                <option value="">Food & Dinning</option>
              </select>
            </div>
            <div>
              <label htmlFor="">Payment Account</label>
              <select name="" id="">
                <option value="">Main Wallet</option>
              </select>
            </div>
          </div>
          <div>
            <input type="text" placeholder="What was this transaction for?" />
          </div>
          <div>Date and time</div>
          <div>Rec and tags</div>
          <div className="flex flex-wor">
            <Button>Cancel</Button>
            <Button>Save Transaction</Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddTransactionForm;
