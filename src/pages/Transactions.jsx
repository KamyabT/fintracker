import Sidebar from "../components/Sidebar";

const Transactions = () => {
  return (
    <div className="flex flex-row bg-back-secondary ">
      <Sidebar />
      <main className="flex-1 px-5 py-5">
      <h1>hello transactions</h1>
      </main>
    </div>
  );
};

export default Transactions;
