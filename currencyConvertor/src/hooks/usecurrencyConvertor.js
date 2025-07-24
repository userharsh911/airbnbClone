import { useState,useEffect } from "react";

function useCurrencyConvertor(currency){
    const [data, setData] = useState({})
    useEffect(()=>{
        if(currency){
            fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
            .then((res)=> res.json())
            .then((res)=> setData(res[currency]))
        }else{
            fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json`)
            .then((res)=> res.json())
            .then((res)=> setData(res))
        }

    },[currency])
    return data;
}

export default useCurrencyConvertor;