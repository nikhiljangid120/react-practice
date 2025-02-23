import { useContext } from 'react'
import {ThemeContext} from "../App"

const ChildC = () => {
  // const user = useContext()
  const {theme,setTheme} = useContext(ThemeContext)
  function handleClick(){
    if(theme==='light') setTheme('dark')
    else setTheme("light")
  }
  return (
    <div>
         <h2>Current Theme: {theme}</h2>
         <button onClick={handleClick}>Change Theme</button>
    </div>
  )
}

export default ChildC