import React, { useEffect, useState } from 'react'

export default function Timer() {
    const [count, setCount] = useState(0)

    const handleTimmer = () => {
        const timmer = setInterval(() => {
            setCount((preVal) => preVal + 1)
        }, 1000);

        return timmer
    }

    useEffect(() => {
        const timmer = handleTimmer()
        return () => clearInterval(timmer)
    }, [])

    return (
        <div>{count}</div>
    )
}
