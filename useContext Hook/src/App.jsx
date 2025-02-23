import { useState } from 'react'
import './App.css'
import ChildA from './components/ChildA'
import { createContext } from 'react'

const UserContext = createContext()

function App() {
  const [user, setuser] = useState({name:"Legend"})

  return (
    <>
    <UserContext.Provider value = {user}>
      <ChildA/>
    </UserContext.Provider>
    </>
  )
}

export default App
export {UserContext}
