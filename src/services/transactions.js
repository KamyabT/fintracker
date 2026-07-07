import api from "./api";

export async function getAllTransactions() {
  const result = await api.get("/collections/transactions/records?expand=category");
  return result.data;
}

export async function getTransactions(page = 1, perPage = 5) {
  const result = await api.get(
    `/collections/transactions/records?page=${page}&perPage=${perPage}&expand=category`,
  );

  return result;
}

export async function getCategories() {
  const result = await api.get(`collections/categories/records`);

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
