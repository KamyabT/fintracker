import api from "./api";

export async function getAllTransactions() {
  const result = await api.get("/collections/transactions/records?expand=category");

  return result.data;
}

export async function getTransactions(page = 1, perPage = 5) {
  const result = await api.get(
    `/collections/transactions/records?page=${page}&perPage=${perPage}&expand=category&sort=-transactionDate`,
  );

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
  const result = await api.delete(`/collections/transactions/records/${data.id}`);
  return result;
}

export async function updateTransaction(data) {
  const result = await api.patch(`/collections/transactions/records/${data.id}`, data);
  return result;
}


export async function getCategories() {
  const result = await api.get(`collections/categories/records`);
  return result.data;
}


export async function addNewCategory(data){
  const result = await api.post (`collections/categories/records` , data)
  return result
}