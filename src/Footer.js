import React from 'react'

export default function Footer(props) {
    return (
        <footer>
            <span className="font-weight-bold">Developed by {props.developer}</span>
        </footer>
    )
}
