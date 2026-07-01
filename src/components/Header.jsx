import Button from "./ui/Button";

const Header = () => {
  return (
    <header className="mb-5">
      <div className="flex flex-row justify-between">
        <div className="flex flex-col ">
          <h3 className="font-semibold text-xl mb-1">Good morning, Ali</h3>
          <span className="text-gray-500 text-sm font-normal">
            Here's what's happening with your finances today.
          </span>
        </div>
        <div className="flex flex-row items-center">
          <Button classesList="bg-primary text-white px-4 py-2 rounded-lg font-normal text-[14px] hover:bg-primary-dark cursor-pointer me-4" type="button">
            + Add Transaction
          </Button>
          <div>notification</div>
          <div className="flex flex-row items-center">
            <img src="" alt="" />
            <p>Ali Rezaie</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
