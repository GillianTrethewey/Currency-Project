/* Data obtained from KC Exchange website as of October 20, 2021.*/

currencyExchange = {
  USD: 1.16,
  EUR: 1,
  CAD: 1.43,
  GBP: 0.85,
  AUD: 1.55,
}
/* customize alert for each country currency by accessing the country key */

function showExchange(currencyKey) {
  console.log('in showExchange function');
    alert(`
      EUR 1 = ${currencyKey} ${currencyExchange[currencyKey]}
    `);
}
