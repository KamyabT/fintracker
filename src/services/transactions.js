import api from "./api";

export async function getAllTransactions() {
  const token = localStorage.getItem("token");

  const result = await api.get("/collections/transactions/records", {
    headers: {
      "Content-Type": "application/json",
      Authorization: `${token}`,
    },
  });
  return result;
}

export async function getTransactions(page = 1, perPage = 5) {
  const token = localStorage.getItem("token");

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

export async function addNewTransaction(data) {
  const token = localStorage.getItem("token");

  try {
    const result = await api.post("/collections/transactions/records", data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(result, "result before returning");
    return result;
  } catch (error) {
    console.log(error.response.data);
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
