import Button from "./Button";

const Modal = () => {
  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
      <div className="bg-white w-full max-w-xl rounded-lg shadow-lg p-6 space-y-10">
        <div>
          <p className="font-semibold text-[18px]">
            Are you sure you want to delete this transaction?
          </p>
        </div>
        <div className="flex flex-row space-x-3 justify-end">
          <Button
            classesList={`me-3 px-3 py-2 border border-gray-300 rounded-lg text-primary font-semibold text-[14px] cursor-pointer hover:bg-back-danger-dark hover:text-white`}
          >
            Cancel
          </Button>
          <Button
            classesList={`me-3 px-3 py-2 border border-gray-300 rounded-lg text-primary font-semibold text-[14px] cursor-pointer hover:bg-back-success-dark hover:text-white`}
          >
            Yes
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
