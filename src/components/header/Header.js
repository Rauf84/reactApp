import React from 'react'
import "./Header.css"

export const Header = ({children}) => {
    return (
        <header className="header">
            {children}
            <div className="header_container">
                <h1 className="header_title">Min text på header</h1>
                <p className="header_text">Mindre beskrivande text såsom slogan eller nåt liknande</p>
            </div>
            <div className="header_btngroup">
                <button className="btn header_btn header_btn--primary">Knapp 1</button>
                <button className="btn header_btn header_btn--secondary">Knapp 2</button>
            </div>
        </header>
    )
}
