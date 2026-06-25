import Sidebar from "../components/Sidebar";

const Budget = () => {
  return (
    <div className="flex flex-row bg-back-secondary ">
      <Sidebar />
      <main className="flex-1 px-5 py-5">
        <h1>hello budget</h1>
      </main>
    </div>
  );
};

export default Budget;
