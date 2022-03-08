import React from 'react';
import './Header.css';

function Header(props) {


  return (
        <header className="Header">
            <h1 className="Header-title">CURRENCY</h1>
            <div>
                <p>Base Currency:</p>
                <select id="base_currency_select"
                        value={props.baseCurrency} 
                        onChange={ev => props.setBaseCurrency(ev.target.value)}>
                        {
                          props.availableBaseCurrencies.map(currency =>(
                            <option key={currency}>{currency}</option>
                        ))

                        }
                </select>
            </div>
        </header>
  );
}

export default Header;

