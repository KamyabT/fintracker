import Button from "./Button";

const Modal = () => {
  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
      <div className="bg-white w-full max-w-xl rounded-lg shadow-lg p-6">
        <div>
          <p>Are you sure you want to delete?</p>
        </div>
        <div>
          <Button>Cancel</Button>
          <Button>Yes</Button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
