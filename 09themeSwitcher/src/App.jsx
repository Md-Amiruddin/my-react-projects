import { useEffect, useState } from "react";
import { ThemeProvider, useTheme } from "./contexts/themeContext"
import ThemeBtn from "./assets/themeBtn";
import Card from "./assets/Card";

function App() {

  const [ dark, switchTheme ]  = useState(false);
  useEffect(() => {
    const htmlTag = document.querySelector('html')
    htmlTag.classList.remove('light','dark')
    dark ? htmlTag.classList.add('dark') : htmlTag.classList.add('light')
  },[dark])

  return (
    <ThemeProvider value={{dark,switchTheme}}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
