import Header from "./componenents/Header/Header"
import SearchBar from "./componenents/SearchBar/SearchBar"
import Userdata from "./componenents/Userdata/Userdata"
import './app.css'
import { useEffect, useState } from "react"
import { userType } from "./type/type"

function App() {

  const [darkmode, setDarkmode]= useState(true) 
  const [user, setUserData] = useState({})

  const toggleDarkmode = ()=>{
    setDarkmode(prev=>!prev)
  }
  
  const handleuserchange=(user:userType)=>{
    setUserData(user)
  }

  useEffect(()=>{
    document.body.className = `${darkmode?'dark':'light'}`
  },[darkmode])

  return (
    <div className="app">
      <div className="container">
          <Header darkmode={darkmode} toggleDarkmode={toggleDarkmode}></Header>
          <SearchBar  saveUserData={handleuserchange}></SearchBar>
          <Userdata user={user}></Userdata>
      </div>
    </div>
  )
}

export default App
