import React from 'react'

export const Footer = () => {
    let footerStyle = {
        position: "absolute-bottom",
        top: '100vh',
        width: '100%'
    }
    return (
        <footer className='bg-dark text-light py-3' style = {footerStyle}>
            All Copyrights &copy; Reserved
        </footer>
    )
}