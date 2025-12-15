import React from 'react'

export default function UserCard({ user }) {
    return (
        <div>
            <p>Name: {user.name}</p>
            <p>Age: {user.age}</p>
            <p>City: {user.city}</p>
        </div>
    )
}
