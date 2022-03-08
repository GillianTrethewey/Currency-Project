import React from 'react';
import './MainContainer.css';

function MainContainer(props) {

  return (
    <div>
    <div>
      <p>Choose up to 4 currencies:</p>            
    </div>
    <div>
        {
        props.displayCurrencies.map((currency, index) => (
            <button className="currencies" style={{backgroundColor: props.toggle ? "#B1D7B6" : "#B1BFD7"}}
              onClick={(toggleButton) => 
                props.removeCurrency(index)}>{currency}</button>              
        ))
        }
        {
        props.availableDisplayCurrencies.map((currency, index) => (

            <button className="currencies" style={{backgroundColor: props.toggle ? "#B1BFD7" : "#B1D7B6"}}
              onClick={(toggleButton) => props.onChooseCurrency(index)}>{currency}</button>
        ))
        }
    </div>
    <main className="MainContainer">
      {props.isLoading ? <div className="loader"></div> : null}

    </main>
    </div>
  );
}

export default MainContainer;

