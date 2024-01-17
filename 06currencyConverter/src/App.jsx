import { useEffect, useState } from "react";
import InputBox from "./InputBox"
import useCurrencyInfo from "./hooks/useCurrencyInfo"

function App() {

  const [ from , setFrom ] = useState('usd');
  const [ to, setTo ] = useState('inr');
  const [ amount, setAmount ] = useState(0);
  const [ convertedAmount, setConvertedAmount] = useState(0);
  let apiData = useCurrencyInfo(from);
  useEffect(() => setConvertedAmount((amount * apiData[to]).toFixed(2)),[amount,to,apiData])
  
  return (
    <div className="flex h-screen w-full text-text">
      <div className="flex-1 bg-primary flex justify-center items-center">
        <p className="text-white font-semibold text-8xl border-white border-l-4 border-t-4 shadow-2xl rounded-xl pb-4 pr-4 pl-2">Currency<br/><span className="text-red font-extralight">Converter.</span></p>
      </div>
      <div className="flex-1 bg-win bg-cover bg-center flex justify-center items-center">
        <div className="w-[500px] rounded-[20px] p-6 space-y-6 bg-gradient-to-tr from-secondary/50 to-[rgba(255,255,255,0)] backdrop-filter backdrop-blur-[40px] border-[1px] border-solid border-[rgba(255,255,255,0.18)] shadow-[0_8px_32px_0_rgba(255,255,255,0.2)]">
          <InputBox text={'From'} currencyList={Object.keys(apiData)} currentSelection={from} onChangeCurrency={(e) => setFrom(e.target.value)} onAmountChange={(e) => {setAmount(e.target.value)}} amountValue={amount} currentCurrency={from}/>
          <div className="flex flex-col items-center">
            <button className="bg-white/20 text-2xl rounded-full px-[11px] pt-[5px] pb-[7px] mt-2 text-white" onClick={() => {
              //swapping 'To' and 'From' vars
              let temp = to
              setTo(from)
              setFrom(temp)

              //swapping 'amount' and 'convertedAmount'
              temp = amount
              setAmount(convertedAmount)
              setConvertedAmount(amount)
            }}>&uarr;&darr;</button>
          </div>
          <InputBox text={'To'} amountValue={convertedAmount} currencyList={Object.keys(apiData)} onChangeCurrency={(e) => setTo(e.target.value)} currentCurrency={to} isReadOnly={true}/>
        </div>
      </div>
    </div>
  )
}

export default App
