import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://v6.exchangerate-api.com/v6/044666c7ddb71990e9c7ff99'
});

export default {
  getCurrencies: (base_currency) =>
  instance({
    'url': '/latest/' + base_currency
  })
}