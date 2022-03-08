import React from 'react';
import './BarChart.css';

function BarChart(props) {

  return (
    <div className="BarChart">
      { 
        Object.entries(props.currencyResult).filter(([key,val]) => (
          props.displayCurrencies.includes(key)
          ))
          .map(([key,val]) => (
        <div className={"BarChart-bar"} style={ {height: props.getHeight(val/props.currencyResult[props.baseCurrency])} }>
          <h1 className= "BarChart--title">{key}</h1>
          <p className="BarChart--text">{(val/props.currencyResult[props.baseCurrency]).toFixed(2)}</p>
        </div>
        ))
      }
      {
        <div className={"BarChart-bar"} style={ {height: props.getHeight(1.0) } }>
          <h1 className="BarChart--title">{props.baseCurrency}</h1>
          <p className="BarChart--text">1.00</p>
        </div>
      }


    </div>
  );
}

export default BarChart;

