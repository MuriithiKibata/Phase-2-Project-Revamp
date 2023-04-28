import React, { createContext, useState } from "react";

export const StocksContext = createContext(null);

function StocksContextProvider(props) {
  let token = localStorage.getItem("token");
  let userId = localStorage.getItem("storeId");
  const [stocks, setStocks] = useState([]);


  function getStocks() {
    fetch(`/stores/${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setStocks(res.items);
        localStorage.setItem("storeId", res.id);
      });
  }

  function handleDelete(id) {
    setStocks(values => stocks.filter((items) => items.id !== id))
    fetch(`/items/${id}`,{
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
  }

  const contextvalues = { getStocks, setStocks, stocks, handleDelete };
  return (
    <StocksContext.Provider value={contextvalues}>
      {props.children}
    </StocksContext.Provider>
  );
}

export default StocksContextProvider;
