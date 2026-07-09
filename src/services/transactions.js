import api from "./api";

export async function getAllTransactions() {
  const result = await api.get("/collections/transactions/records?expand=category");
  console.log(result, "transactions result");

  return result.data;
}

export async function getTransactions(page = 1, perPage = 5) {
  const result = await api.get(
    `/collections/transactions/records?page=${page}&perPage=${perPage}&expand=category&sort=-transactionDate`,
  );
  console.log(result, "transactions paginated result");

  return result.data;
}

export async function getCategories() {
  const result = await api.get(`collections/categories/records`);
  return result.data;
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

export async function deleteTransaction(data) {
  console.log("delete runned");
  const result = await api.delete(`/collections/transactions/records/${data.id}`);
  console.log(result, "delete res");
}
