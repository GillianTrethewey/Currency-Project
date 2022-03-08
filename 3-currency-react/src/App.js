import './normalize.css';
import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [currencyResult, setCurrencyResult] = useState([]); //empty list
  const [baseCurrency, setBaseCurrency] = useState("EUR");
  const [displayCurrencies, setDisplayCurrencies] = useState(["AUD", "CAD", "USD"]);
  const availableBaseCurrencies = ["EUR", "AUD", "CAD", "USD", "GBP"];
  const [availableDisplayCurrencies, setAvailableDisplayCurrencies] = useState([ "BGN", "BRL", "CHF", "CNY", "CZK", "DKK", "GBP", "HKD", "HRK", "HUF", "IDR", "ILS", "INR", "ISK", "JPY", "KRW", "MXN", "MYR", "NOK", "NZD", "PHP", "PLN", "RON", "RUB", "SEK", "SGD", "THB", "TRY", "ZAR" ]);
  const [toggle, setToggle] = useState(false);
  const toggleButton = () => setToggle(!toggle);

  function onChooseCurrency(index) {
//     setAvailableDisplayCurrencies([
//       ...availableDisplayCurrencies.slice(0,index),
//       ...availableDisplayCurrencies.slice(index+1, availableDisplayCurrencies.length) 
// 
//       ]);
// 
//     setDisplayCurrencies([
//       ...displayCurrencies, 
//       availableDisplayCurrencies[index],
//     ]);

      const arrayDuplicate = [
        ...availableDisplayCurrencies.slice(0,index),
        ...availableDisplayCurrencies.slice(index+1, availableDisplayCurrencies.length) 
      ];

      arrayDuplicate.sort();
      setAvailableDisplayCurrencies(arrayDuplicate);


      const array2Duplicate = [
        ...displayCurrencies, 
        availableDisplayCurrencies[index],
      ];

      array2Duplicate.sort();
      setDisplayCurrencies(array2Duplicate);

  }

  function removeCurrency(index) {
//    setDisplayCurrencies([
//      ...displayCurrencies.slice(0,index),
//      ...displayCurrencies.slice(index+1) 
//      ]);
//    setAvailableDisplayCurrencies([
//     ...availableDisplayCurrencies,
//      displayCurrencies[index], 
//      ]);

      const array3Duplicate = [
        ...displayCurrencies.slice(0,index),
        ...displayCurrencies.slice(index+1) 
      ];

      array3Duplicate.sort();
      setDisplayCurrencies(array3Duplicate);

      const array4Duplicate = [
        ...availableDisplayCurrencies,
        displayCurrencies[index]
      ];

      array4Duplicate.sort();
      setAvailableDisplayCurrencies(array4Duplicate);

  }

// New calculation method as compared to currency-js

  function getHeight(value) {
    const rateArray = Object.entries(currencyResult).filter(([key,val]) => (
        displayCurrencies.includes(key)
        ))
        .map(([key,val]) => val);
    rateArray.push(1.0);
    const minRate = Math.min(...rateArray);
    let val = (1/(value))*100/minRate + 300;
    return val;
    };

 

  function doFetch() {
    setIsLoading(true);

    const url = "https://kc-exchangeratesapi.herokuapp.com/latest"
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setIsLoading(false);
        data.rates["EUR"] = 1.00;
        setCurrencyResult(data.rates);
      });
  }
 useEffect(doFetch, []);

  return (
    <div className="App">
        <header className="Header">
            <h1 className="Header-title">CURRENCY</h1>
            <div>
                <p>Base Currency:</p>
                <select id="base_currency_select"
                        value={baseCurrency} 
                        onChange={ev => setBaseCurrency(ev.target.value)}>
                        {
                          availableBaseCurrencies.map(currency =>(
                            <option key={currency}>{currency}</option>
                        ))

                        }
                </select>
            </div>
        </header>
        <div>
            <p>Choose up to 4 currencies:</p>
            
        </div>
        <div> 

            {
            displayCurrencies.map((currency, index) => (
                <button className="currencies" style={{backgroundColor: toggle ? "#B1D7B6" : "#B1BFD7"}}
                  onClick={(toggleButton) => 
                    removeCurrency(index)}>{currency}</button>              
            ))
            }
            {
            availableDisplayCurrencies.map((currency, index) => (

                <button className="currencies" style={{backgroundColor: toggle ? "#B1BFD7" : "#B1D7B6"}}
                  onClick={(toggleButton) => onChooseCurrency(index)}>{currency}</button>
            ))
            }

        </div>
        <main className="MainContainer">
          {isLoading ? <div className="loading"></div> : null}

          <div className="BarChart">
            { 
              Object.entries(currencyResult).filter(([key,val]) => (
                displayCurrencies.includes(key)
                ))
                .map(([key,val]) => (
              <div className={"BarChart-bar"} style={ {height: getHeight(val/currencyResult[baseCurrency])} }>
                <h1 className= "BarChart--title">{key}</h1>
                <p className="BarChart--text">{(val/currencyResult[baseCurrency]).toFixed(2)}</p>
              </div>
              ))
            }
            {
              <div className={"BarChart-bar"} style={ {height: getHeight(1.0) } }>
                <h1 className="BarChart--title">{baseCurrency}</h1>
                <p className="BarChart--text">1.00</p>
              </div>
            }


          </div>
        </main>
    </div>
  );
}

export default App;
