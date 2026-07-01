import api from "./api";
const token = localStorage.getItem("token");

export async function getAllTransactions() {
  const result = await api.get("/collections/transactions/records", {
    headers: {
      "Content-Type": "application/json",
      Authorization: `${token}`,
    },
  });
  return result;
}

export async function getTransactions(page = 1, perPage = 5) {
  const result = await api.get(
    `/collections/transactions/records?page=${page}&perPage=${perPage}`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `${token}`,
      },
    }
  );
  return result;
}
