import React from 'react'
import { createPortal } from 'react-dom'

export default function Modal({ isOpen }) {
    const portalRoot = document.getElementById('modal-root');
    if (!isOpen) {
        return null
    }
    return createPortal(
        <div style={{
            position: 'fixed', // This is the magic line
            top: 0,
            left: 0, height: '100vh', width: '100vw', backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 100
        }}>
            <div style={{ height: '30%', width: '50%' }}>
                <h1>
                    This is the Modal created in portal
                </h1>
            </div>

        </div>
        ,
        portalRoot
    )
}
