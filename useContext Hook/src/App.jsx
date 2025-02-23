import { useState } from 'react'
import './App.css'
import ChildA from './components/ChildA'
import { createContext } from 'react'

// const UserContext = createContext()
const ThemeContext = createContext()

function App() {  

  const [theme,setTheme] = useState("light")

  return (
    <>
    {/* <UserContext.Provider value = {user}>
      <ChildA/>
    </UserContext.Provider> */}
    <ThemeContext.Provider value = {{theme,setTheme}}>
    <div 
        id="box"
        style={{
          width: "200px",
          height: "200px",
          margin: "20px auto",
          borderRadius: "10px",
          backgroundColor: theme === "light" ? "#f0f0f0" : "#333",
          transition: "background-color 0.3s ease-in-out",
          boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
        }}
      ></div>
      <ChildA/>
    </ThemeContext.Provider>
    </>
  )
}

export default App
// export {UserContext}
export {ThemeContext}
