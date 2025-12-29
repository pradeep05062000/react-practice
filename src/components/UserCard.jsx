import React from 'react'

export default function UserCard({ user }) {
    return (
        <div>
            <p>Name: {user.name}</p>
            <p>Age: {user.username}</p>
            <p>City: {user.email}</p>
        </div>
    )
}
