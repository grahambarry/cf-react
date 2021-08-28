import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://v6.exchangerate-api.com/v6/',
    headers: {
        'content-type':'application/octet-stream',
        'api-host':'https://v6.exchangerate-api.com/v6/',
        'api-key': process.env.CURRENCY_API_KEY
    }
});

export default {
    stockTimeSeries: (base_currency) =>
    instance({
        'method':'GET',
        'url':'/latest',
        'params': {
            'base_code': base_currency
        },
    })
}

// getCurrencies: function (base_currency) {
//   axios
//     .get('https://v6.exchangerate-api.com/v6/044666c7ddb71990e9c7ff99/latest/' + `${base_currency}`)
//     .then(response => {
//       this.currencies = response.data.conversion_rates
//     })
//     .catch(error => {
//       this.errored = true
//     })
//     .finally(() => this.loading = false)
// },