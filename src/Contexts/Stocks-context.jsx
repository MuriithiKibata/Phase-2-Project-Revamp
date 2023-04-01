import React, { createContext, useState } from "react";

export const StocksContext = createContext(null);

function StocksContextProvider(props) {
  let token = localStorage.getItem("token");
  let userId = localStorage.getItem("storeId")
 

  const [stocks, setStocks] = useState([]);
  function getStocks() {
    fetch(`/stores/${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setStocks(res.items)
        localStorage.setItem("storeId", res.stores[0].id);
    });
  }

  const contextvalues = { getStocks, setStocks, stocks };
  return (
    <StocksContext.Provider value={contextvalues}>
      {props.children}
    </StocksContext.Provider>
  );
}

export default StocksContextProvider;
