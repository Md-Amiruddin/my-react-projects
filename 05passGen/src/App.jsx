import { useEffect, useRef, useState } from "react";

function passwordGenerator(passlength , numbersAllowed, specialAllowed) {

  let password = '';
  
  for (let i = 0; i < passlength; i++) {
    let n = Math.random() * 10;

    if(n<3 && specialAllowed){

      let possibleSpecialChars = "!@#$%^&*()_+"
      let randomIdx = (Math.floor(Math.random() * 10)) % possibleSpecialChars.length;
      password += possibleSpecialChars.charAt(randomIdx);
    
    }else if((n>3 && n<6) && numbersAllowed){
      
      let randomAscii = 48 + Math.floor(Math.random() * 10);
      password += String.fromCharCode(randomAscii);
    
    }else{
      
      let randomAscii = 97 + Math.floor(Math.random() * 10) % 26;
      password += String.fromCharCode(randomAscii);
    
    }
  }

  return password;
}

function onClickCopy(passwordField) {
  navigator.clipboard.writeText(passwordField.current.value);
  passwordField.current.select();
}

function App() {

  const [ length, setLength ] = useState(10);
  const [ numbersAllowed , setNumbersAllowed ] = useState(false);
  const [ specialAllowed, setSpecialAllowed ] = useState(false);
  const [ password, setPassword ] = useState('');
  const passwordField = useRef(null);
  
  useEffect(
    () => setPassword((prev) => prev = passwordGenerator(length, numbersAllowed, specialAllowed)),
    [length, numbersAllowed, specialAllowed]
  );

  return (
    <div className="flex justify-center">
      <div className="w-[815px]">
        <div className="flex flex-col items-center text-white bg-[rgb(72,61,139)] mt-20 pb-12 space-y-10 shadow-md rounded-xl">
          <p className="text-3xl mt-8">Password <span className="text-orange-500 shadow-lg rounded-xl px-2 font-bold">Generator</span></p>
          <div>
            <div className="shadow-md">
              <input readOnly value={password} ref={passwordField} className="h-11 w-[550px] align-middle text-orange-500 pl-2 rounded-l-md" type="text" />
              <button onClick={() => onClickCopy(passwordField)} className="h-11 hover:bg-orange-500 active:bg-[rgb(23,37,84)] duration-[0.15s] text-xl align-middle bg-[rgb(23,37,84)] px-3 rounded-r-md"><p className="-translate-y-[2.5px]">copy</p></button>
            </div>
            <div className="flex space-x-7 mt-5 font-medium">
              <div>
                <input className="align-middle accent-orange-500" type="range" min={4} max={60} value={length} onChange={(e) => setLength(e.target.value)}/>
                &nbsp;&nbsp;
                <span className="align-middle">Length : {length}</span>
              </div>
              <div>
                <input className="align-middle accent-orange-500" type="checkbox" onChange={(e) => setNumbersAllowed(e.target.checked)}/>
                &nbsp;&nbsp;
                <span className="align-middle">Numbers</span>
              </div>
              <div>
                <input className="align-middle accent-orange-500" type="checkbox" onChange={(e) => setSpecialAllowed(e.target.checked)}/>
                &nbsp;&nbsp;
                <span className="align-middle">Special characters</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
