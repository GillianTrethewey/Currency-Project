console.log('loading main.js');
let state = {
  data: [
    {
    "currencyKey": 'Nothing yet',
    "currencyExchange": 'Nada',
    },
  ],
};
countries = [
  "USD",
  "EUR",
  "CAD",
  "GBP",
  "AUD",
]
let gbpvalue = 0;

// .filter - copy and delete/ sieve 
// .map - copy and transform/function applied

function displayOutput() {
  console.log('display function');
  let output = document.querySelector('.BarChart');
  console.log('Output is: ', output);
  output.innerHTML = '';
  for (const [key, value] of Object.entries(state.data.rates)) {
    //console.log('key:', key);
    //console.log('value:', value);
    // GBP is the strongest currency and will have the highest bar, so 
    // need to proportion everything according to it's value
    if(key === "GBP") {
      gbpvalue = value**(-1);
    }
    // calculation of bar height explained in README.md
    let val = (1/(value))*100/gbpvalue;
    // specific countries were chosen above in the countries list
    for (country of countries) {
      if(country === key) {
        console.log('key');
      output.innerHTML += `
        \n<div class="BarChart-bar ${key}" style="height: ${ val }%"><h1 class="BarChart--title">${key}</h1>
        <p>${value}</p> </div>
        `
      }
    }
  }
  // EUR not in data returned, so manually added this to the collection of bars
  output.innerHTML += `
    \n<div class="BarChart-bar EUR" style="height: calc(100%/${gbpvalue})""><h1 class="BarChart--title">EUR</h1><p>1.00</p></div>
    `
};

function doFetch() {
  fetch("https://kc-exchangeratesapi.herokuapp.com/latest")
    .then(response => response.json())
    .then(data => {
      console.log(data);
      console.log('in doFetch');
      state.data = data;
      displayOutput();
    });
  }

doFetch();