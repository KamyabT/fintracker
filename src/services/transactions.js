import api from "./api";

export async function getAllTransactions() {

  const result = await api.get("/collections/transactions/records");
  return result;
}

export async function getTransactions(page = 1, perPage = 5) {

  const result = await api.get(
    `/collections/transactions/records?page=${page}&perPage=${perPage}`,
  );
  return result;
}

export async function addNewTransaction(data) {

  try {
    const result = await api.post("/collections/transactions/records", data);
    return result;
  } catch (error) {
    console.error("Error adding new transaction:", error);
    throw error;
  }
}

// {
//   transactionName: "test",
//   amount: 50,
//   type: "Income",
//   category: "food",
//   transactionDate: "2026-06-27 19:28:24.000Z",
//   description: "",
//   user: "xgkdxl79ys7zsym",
// }
