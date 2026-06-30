import api from "./api";

export async function getTransactions(currentPage = 1, perPage = 5) {
  const token = localStorage.getItem("token");

  try {
    const transactionsResult = await api.get(
      `/collections/transactions/records?page=${currentPage}&perPage=${perPage}`,
      {
        headers: {
          Authorization: token,
        },
      },
    );
    return transactionsResult;
  } catch (error) {
    console.log(error);
  }

  console.log("get transactions");
}
