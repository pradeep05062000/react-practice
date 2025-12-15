import React, { useState } from 'react'

export default function Counter() {
    const [count, setCount] = useState(0)

    const increment = () => {
        setCount((preValue) => {
            return preValue + 1
        })
    }

    const decrement = () => {
        setCount((preValue) => {
            if (preValue <= 0) {
                return 0
            }
            return preValue - 1
        })
    }

    const textColor = count >= 10 ? 'red' : 'black';

    return (
        <div>
            <h2 style={{ color: textColor }}>
                {count}
            </h2>

            <button
                onClick={increment}
            >
                increment
            </button>

            <button onClick={decrement}>
                decrement
            </button>
        </div>
    )
}
