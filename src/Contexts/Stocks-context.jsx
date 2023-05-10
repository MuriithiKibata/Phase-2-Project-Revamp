import React, { createContext, useState } from "react";

export const StocksContext = createContext(null);

function StocksContextProvider(props) {
  let token = localStorage.getItem("token");
  const [stocks, setStocks] = useState([]);

  async function getStocks() {
    const data = await fetch("/items", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const response = await data.json();
    setStocks(response);
    console.log("I run")
  }

  function handleDelete(id) {
    setStocks((values) => stocks.filter((items) => items.id !== id));
    fetch(`/items/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  const contextvalues = { getStocks, setStocks, stocks, handleDelete };
  return (
    <StocksContext.Provider value={contextvalues}>
      {props.children}
    </StocksContext.Provider>
  );
}

export default StocksContextProvider;
