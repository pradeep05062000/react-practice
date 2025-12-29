import { useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react'
import Counter from '../components/Counter'
import Timer from '../components/Timer'
import UserCard from '../components/UserCard'
import { ThemeContext } from '../context/themeContext'
import { useFetch } from '../hooks/useFetch'
import IncrementButton from '../components/IncrementButton'
import Modal from '../components/Modal'


export function Home() {
    const [searchText, setSearchText] = useState("")
    const [showTimmer, setShowTimer] = useState(true)
    const [isOpen, setIsOpen] = useState(false)

    const { theme, toggleTheme } = useContext(ThemeContext)
    const inputRef = useRef()
    const countRef = useRef(0)

    const handleSearch = (e) => {
        const searchValue = e.target.value
        setSearchText(searchValue)
    }
    let url = "https://jsonplaceholder.typicode.com/users"
    const { data, loading, error } = useFetch(url)

    const filteredUsers = loading ? [] : data?.filter((user) => user.name.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()))

    const usersData = filteredUsers?.map(user => {
        return <UserCard key={user.id} user={user} />
    })

    const expensiveCalculation = (fUsers) => {
        let totalLength = 0
        if (!fUsers) return totalLength
        for (const user of fUsers) {
            totalLength += user.name.length
        }
        return totalLength
    }

    const totalLength = useMemo(() => expensiveCalculation(data), [data])

    useEffect(() => {
        inputRef.current.focus()
    }, [])

    countRef.current += 1

    const increment = useCallback(() => {
        console.log("Calling from increment")
    }, [])

    return (
        <>
            <div style={{ backgroundColor: theme === "dark" ? "#333333" : "#ffffff" }}>
                <input value={searchText} onChange={handleSearch} ref={inputRef} />
                {
                    loading ? <p>...Loading</p> : usersData
                }
                <Counter />
                <button onClick={() => setShowTimer(!showTimmer)}>
                    {showTimmer ? "Hide" : "Show"}
                </button>
                {showTimmer && <Timer />}
                <button onClick={toggleTheme}>
                    {theme === "dark" ? "Light" : "Dark"}
                </button>

                <p>Total Render: {countRef.current}</p>
                <p>Current Length of the user Name is: {totalLength}</p>
                <IncrementButton onClick={increment} />
                <button onClick={() => { setIsOpen(!isOpen) }}>
                    Open Modal
                </button>
            </div>

            <Modal isOpen={isOpen} />
        </>
    )
}
