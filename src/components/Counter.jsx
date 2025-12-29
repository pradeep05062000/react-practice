import React, { useReducer, useState } from 'react'

const reducer = (state, action) => {
    switch (action.type) {
        case "increment":
            return state + 1
        case "decrement":
            let newVal = state - 1
            if (newVal <= 0) {
                return 0
            }
            return newVal
        case "reset":
            return 0
        default:
            return state
    }
}

export default function Counter() {
    // const [count, setCount] = useState(0)
    const [count, dispatch] = useReducer(reducer, 0)

    const increment = () => {
        // setCount((preValue) => {
        //     return preValue + 1
        // })
        dispatch({ type: "increment" })
    }

    const decrement = () => {
        // setCount((preValue) => {
        //     if (preValue <= 0) {
        //         return 0
        //     }
        //     return preValue - 1
        // })
        dispatch({ type: "decrement" })
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

            <button onClick={() => { dispatch({ type: "reset" }) }}>
                reset
            </button>
        </div>
    )
}
