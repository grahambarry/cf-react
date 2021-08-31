import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://v6.exchangerate-api.com/v6/' + `${process.env.REACT_APP_CURRENCY_API_KEY}`,
});

export default {
  getCurrencies: (base_currency) =>
  instance({
    'url': '/latest/' + base_currency
  })
}