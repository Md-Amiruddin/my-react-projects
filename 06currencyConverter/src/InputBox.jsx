import React from 'react'

function InputBox({text = 'From' , currencyList=['null'], amountValue=0, onChangeCurrency = (e) => {}, isReadOnly=false, onAmountChange= (e) => {}, currentCurrency}) {
  return (
    <div className="p-3 block space-y-2 bg-transparent text-white/40 rounded-md">
            <div className="flex justify-between">
              <div>{text}</div>
              <div className=''>Currency Type</div>
            </div>
            <div className="flex justify-between">
              <input className="flex-1 w-full bg-transparent outline-none border-solid border-b-[2px] px-2 text-white/80 focus:border-solid focus:border-b-[3px] focus:border-primary" type="number" name={'amountInput'+text} readOnly={isReadOnly} onChange={onAmountChange} value={amountValue}/>
              <div className="flex-1 flex justify-end items-end">
                <select className="h-8 bg-transparent px-2 font-light focus:border-primary focus:border-b-2 bg-accent text-white/90" name={'currencySelector'+text} onChange={onChangeCurrency} value={currentCurrency}>
                  {
                    currencyList.map((currency) => {
                        return (<option className='bg-white/90 text-black' value={currency} key={currency}>{currency}</option>)
                      }
                    )
                  }
                </select>
              </div>
            </div>
          </div>
  )
}

export default InputBox