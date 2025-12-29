import React from 'react'

export default React.memo(function IncrementButton({ onClick }) {
    console.log("Increment Button Rendered")
    return (
        <button onClick={onClick}>
            Increment from Child
        </button>
    )
})
