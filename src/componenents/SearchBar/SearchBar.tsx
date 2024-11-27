import { FormEvent, useEffect, useState } from 'react';
import './searchbar.css'
import { userType } from '../../type/type';

type searchbarprops={
  saveUserData : (user:userType)=>void;
}

const SearchBar = ({saveUserData}:searchbarprops) => {

const [user,setUser] = useState('')

const handleUserChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
  setUser(e.target.value)
}

const fetchUser=async(user:string)=>{
    try {
      const response = await fetch(`https://api.github.com/users/${user}`)
      if (!response.ok) {
        throw new Error
      }
      const data = await response.json()
      console.log(data)
      saveUserData(data)
    } catch (error) {
      console.error('error: ', error)
    }
}

useEffect(()=>{
  fetchUser('llorintz')
},[])

const handleSubmit =(e:FormEvent)=>{
  e.preventDefault()
  fetchUser(user)
}

  return (
    <form onSubmit={handleSubmit} className='search-form' action="">
      <img className='search-icon' src='/images/icon-search.svg' alt="" />
      <input placeholder='Search Github username...' value={user} onChange={handleUserChange} type="text" className='username'/>
      <button className='search-button'>Search</button>
    </form>
  )
}

export default SearchBar