# currency-css #

https://gilliantrethewey.github.io/currency-css/

A project using JavaScript and CSS to render a graph of currency valuations. Currency valuations were obtained from the KC Exchange Heroku website as of October 20, 2021. 

## Alert messages - using data from KC Exchange Heroku website as of October 20, 2021: ##
- EUR 1 = USD 1.16
- EUR 1 = CAD 1.43
- EUR 1 = EUR 1
- EUR 1 = GBP 0.85
- EUR 1 = AUD 1.55

## Methodology for bar heights: ##
Proportion the bars so that the strongest currency is 100% of the content-height.

### Calculations for bar heights: ###
1) First calculate inverse of valuation.
2) Convert to a percent by multiplying by 100.
3) Ratio the percentages so that GBP ends up being 100% of the content-height by
dividing by 1.18.

#### Step 1: ####
-  USA: 1/1.1623 = 0.86 
-  EUR: 1/1.0000 = 1.00 
-  CAD: 1/1.4349 = 0.697
-  GBP: 1/0.8450 = 1.18 
-  AUD: 1/1.5528 = 0.644

#### Step 2: ####
-  USA: 0.86 * 100  = 86%
-  EUR: 1.00 * 100  = 100%
-  CAD: 0.697 * 100 = 69.7%
-  GBP: 1.18 * 100  = 118%
-  AUD: 0.644 * 100 = 64.4%

#### Step 3 (Done in CSS calc): ####
-  USA: 86%/ 1.18 
-  EUR: 100%/1.18 
-  CAD: 69.7%/1.18
-  GBP: 118%/1.18 = 100%
-  AUD: 64.4%/1.18 

![GitHub Pages](https://user-images.githubusercontent.com/7611178/138305035-57969d09-1c95-4501-bfae-d1c8e99999b8.jpg)

![GItHub Pages with alert](https://user-images.githubusercontent.com/7611178/138305055-f439a257-f399-46d5-8915-c229c590aa98.jpg)

![Local render](https://user-images.githubusercontent.com/7611178/138305112-00da8366-f289-4d1c-9a8b-10896f8dc903.jpg)

![Local render with alert](https://user-images.githubusercontent.com/7611178/138305129-c5bc2a0d-d081-4b13-afcd-e32bc3ca9575.jpg)





