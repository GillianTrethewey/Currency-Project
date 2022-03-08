# currency-js #


A project using JavaScript and CSS to render a graph of currency valuations. Currency valuations were obtained using the api from the KC Exchange Heroku website, based on EUR.

## Methodology for bar heights: ##
Proportion the bars so that the strongest currency is 100% of the content-height.

### Calculations for bar heights: ###
1) First calculate inverse of valuation.
2) Convert to a percent by multiplying by 100.
3) Ratio the percentages so that GBP ends up being 100% of the content-height by
dividing by the inverse of the GBP valuation (as a variable).



