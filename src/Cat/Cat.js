import React from 'react'
import Maddie from "./Maddie.jpg"

export default class extends React.Component {

    render() {
        return (
            <div>
                <header>
                    <a href="/about">About</a>
                    <a href="/workhistory">Work History</a>
                    <a href="/education">Education</a>
                    <a href="/contact">Contact</a>
                    <a href="/cat">Cat</a>
                </header>
                <img src={Maddie} className="CaMaddie" alt={"Maddie the cat"}/>
            </div>
        )
    }
}