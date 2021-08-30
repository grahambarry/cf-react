import React from 'react'
import api from '../api/api.js'

const IndexPage = () => {
    // Create state variables
    let [responseData, setResponseData] = React.useState('')
    let [base_code, setBaseCode] = React.useState('')
    let [message, setMessage] = React.useState('')

    // fetches stock data based on parameters
    const fetchData = (e) => {
        e.preventDefault()

        setMessage('Loading...')

        api.getCurrencies(base_code)
        .then((response)=>{
           setResponseData(JSON.stringify(response.data.conversion_rates))
           setMessage('')
           console.log(JSON.stringify(response.data.conversion_rates))
        })
        .catch((error) => {
           setMessage('Error')
           console.log(error)
        })
    }
    return (
        <div>
            <form onSubmit={fetchData}>
                <fieldset>
                    <legend>Search Stock Market</legend>
                    <label htmlFor="base_code">Enter Currency base_code
                        <input
                            required
                            name="base_code"
                            id="base_code"
                            type='text'
                            placeholder='SPY'
                            value={base_code}
                            onChange={(e) => setBaseCode(e.target.value)}
                        />
                    </label>
                    <button type='submit'>Submit</button>
                </fieldset>
            </form>
            <p>{message}</p>
            <p>{responseData}</p>
        </div>
    )
}

export default IndexPage