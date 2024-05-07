import { useEffect, useState } from 'react'
import { ThemeProvider } from './contexts/ThemeContext';
import ThemeBtn from './components/ThemeBtn';
import Card from './components/Card';

function App() {
  const[themeMode,setThemeMode] = useState("light");
  console.log("current mode",themeMode)
  const lightMode = () => setThemeMode("light");//this (light) class is present in html tag by tailwind
  const darkMode = () => {console.log("dark") ;setThemeMode("dark");}

  useEffect( () => {
    console.log('theme=',themeMode);
    let htmlTag = document.querySelector('html');
    htmlTag.classList.remove('light','dark');
    htmlTag.classList.add(themeMode); 
  },[themeMode])

  return (
    <>
      <ThemeProvider value={{themeMode, lightMode, darkMode}}>
        <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
            <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                <ThemeBtn/>
            </div>
            <div className="w-full max-w-sm mx-auto">  
              <Card/>
            </div>
          </div>
        </div>
      </ThemeProvider>
    </>
  )
}

export default App;
