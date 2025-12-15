import { useEffect, useState } from 'react'
import './App.css'
import Counter from './components/Counter'
import UserCard from './components/UserCard'


const users = [
  {
    id: 1,
    name: "John Doe 1",
    age: 30,
    city: "New York"
  },
  {
    id: 2,
    name: "Pradeep",
    age: 25,
    city: "Los Angeles"
  },
  {
    id: 3,
    name: "Ingle",
    age: 25,
    city: "Los Angeles"
  }
]

function App() {
  const [searchText, setSearchText] = useState("")


  const handleSearch = (e) => {
    const searchValue = e.target.value
    setSearchText(searchValue)
  }


  const filteredUsers = users.filter((user) => user.name.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()))

  const usersData = filteredUsers.map(user => {
    return <UserCard key={user.id} user={user} />
  })

  return (
    <>
      <input value={searchText} onChange={handleSearch} />
      {
        usersData
      }
      <Counter />
    </>
  )
}

export default App
