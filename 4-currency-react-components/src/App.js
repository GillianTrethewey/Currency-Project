import './normalize.css';
import './App.css';
import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header.js';
import MainContainer from './components/MainContainer/MainContainer.js';
import BarChart from './components/BarChart/BarChart.js';

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [currencyResult, setCurrencyResult] = useState([]); //empty list
  const [baseCurrency, setBaseCurrency] = useState("EUR");
  const [displayCurrencies, setDisplayCurrencies] = useState(["AUD", "CAD", "USD"]);
  const availableBaseCurrencies = ["EUR", "AUD", "CAD", "USD", "GBP"];
  const [availableDisplayCurrencies, setAvailableDisplayCurrencies] = useState([ "BGN", "BRL", "CHF", "CNY", "CZK", "DKK", "EUR", "GBP", "HKD", "HRK", "HUF", "IDR", "ILS", "INR", "ISK", "JPY", "KRW", "MXN", "MYR", "NOK", "NZD", "PHP", "PLN", "RON", "RUB", "SEK", "SGD", "THB", "TRY", "ZAR" ]);
  const [toggle] = useState(false);
//  const toggleButton = () => setToggle(!toggle);

  function onChooseCurrency(index) {

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
      <Header
        baseCurrency={baseCurrency}
        availableBaseCurrencies={availableBaseCurrencies}
        setBaseCurrency={setBaseCurrency}
      />
      <MainContainer 
       displayCurrencies={displayCurrencies}
       availableDisplayCurrencies={availableDisplayCurrencies}
       onChooseCurrency={onChooseCurrency}
       removeCurrency={removeCurrency}
       isLoading={isLoading}
       toggle={toggle} 
      />
      <BarChart 
        currencyResult={currencyResult}
        displayCurrencies={displayCurrencies}
        baseCurrency={baseCurrency}
        getHeight={getHeight}
      />  
    </div>
  );
}

export default App;
