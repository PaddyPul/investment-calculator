# Investment Returns Calculator
This is a simple investment returns calculator, developed using mainly **React**, **Redux**, **Chart.js**.

## Dependencies
In order to use this, you must have NPM installed in your computer.

You can get it [here](https://www.npmjs.com/get-npm).

## Up and running

The app is really easy to set up. After installing NPM (above mentioned), just clone the repo into a folder, and type into a prompt:

```
npm install
npm start
```

The calculator should be available accessing localhost:3000 in any browser.

You can also access the application deployed at https://investmentcalculator.herokuapp.com/.

## How does it work

Imagine you made a investment in bitcoin a couple of years ago and you would like to know how would the returns differ from other types of investment, like stocks or treasury securities.
This calculator helps you compare between them, giving you the total return of each investment, depending on the period and amount invested, as well as a chart with the entire period of perfomance of the investment.

So far, this calculator can only compare between bitcoins and a 10% fixed interest rate in treasury bills, and the value inputs and outputs is in Brazilian Reais (BRL).

The Trasury interest rates are calculated daily, as well as the closing price for each market day in bitcoins. This latter is fetched from https://min-api.cryptocompare.com/, an API for getting
live and historical pricing data on cryptocurrencies.


### React

The whole app is made using React JS library, in order to achieve simplicity and flexibility, and by creating reusable components, some of which track state, and some that don't. Also, the **react-create-app** script was used to build this application.

### Redux, Middleware and Axios

State of react components is managed by a redux store. This is achieved by components dispatching actions to it. Redux **Thunk** and **Promise** are used as middleware to, respectively, catch errors and process
promises received by html requests.
The request is made asynchronously using **axios** client.

### Chart.js

This app also uses a chart.js wrapper for React, in order to display the investment data in line charts, giving information of each day in the period of the investment.

### Moment

The moment library helped to manipulate timestamp without common caveats related to this kind of data, like adding days to different duration months (30 or 31 days), et cetera.

### Testing

Some tests were produced using Jest and react-test-renderer libraries.


## Final considerations

Some things should be kept in mind for later development, like possibility to choose custom investment amounts or periods of time, other investment types and more functionalities to compare data.

There is, though, a problem with currencies. As the cryptocompare API gives out the information in an asked currency (like, in this case, Brazilian Reais), the exchange rate used to compare a closing price from, say, a year ago is today's rate or that specific day's rate? This is something not mentioned in the API documentation and could lead to some discrepancies in the information displayed.


## The end

Thanks for your time.
