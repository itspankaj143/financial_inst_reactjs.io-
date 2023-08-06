import React, { useState } from "react";
import "./App.css";
import sampleData from "./sampleData (1).json";

function App() {
  const [first, setfirst] = useState(sampleData);

  const handleClick = (e) => {
    // const s = [...first];
    // console.log(s);

    const s = e.target.innerText.toLowerCase();

    console.log(s);

    const [...result] =
      s === "ticker"
        ? first.sort((a, b) => a.ticker.localeCompare(b.ticker))
        : s === "price"
        ? first.sort((a, b) => b.price - a.price)
        : first.sort((a, b) => {
            const assetOrder = { Equities: 0, Macro: 1, Credit: 2 };

            return assetOrder[a.assetClass] - assetOrder[b.assetClass];
          });
    setfirst(result);
    console.log(result);
  };
  return (
    <div className="App">
      <h1>Financial Instruments (Felix It's)</h1>
      <table border={1}>
        <thead>
          <tr>
            <th onClick={handleClick}>Ticker</th>
            <th onClick={handleClick}>Price</th>
            <th onClick={handleClick}>Asset Class</th>
          </tr>
        </thead>
        <tbody>
          {first.map((cval, index) => {
            return (
              <tr key={index}>
                <td>{cval.ticker}</td>
                <td>{cval.price}</td>
                <td>{cval.assetClass}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
