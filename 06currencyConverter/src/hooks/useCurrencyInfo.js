import { useEffect, useState } from "react"

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});

    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .catch( (e) => {console.log(`${e} api call error`)})
        .then( (res) => res.json())
        .then( (res) => setData(res[currency]));
        // console.log(`useCurrencyInfo inside useEffect : ${data}`);
    },[currency]);
    // console.log(`useCurrencyInfo outside useEffect : ${data}`);
    return data;
}

export default useCurrencyInfo;