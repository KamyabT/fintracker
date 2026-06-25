import api from "./api";

export async function getTransactions() {
  const token = localStorage.getItem("token");

  try {
    const transactionsResult = await api.get("/collections/transactions/records", {
      headers: {
        Authorization: token,
      },
    });
    return transactionsResult;
  } catch (error) {
    console.log(error);
  }

  console.log("get transactions");
}
