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
    },
  );
  return result;
}

export async function addNewTransaction(e) {
  e.preventDefault();
  try {
    const result = await api.post(
      "/collections/transactions/records",
      {
        transactionName: "test",
        amount: 50,
        type: "Income",
        category: "food",
        transactionDate: "2026-06-27 19:28:24.000Z",
        description: "",
        user: "xgkdxl79ys7zsym",
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    return result;
  } catch (error) {
    console.log(error.response.data);
  }
}
