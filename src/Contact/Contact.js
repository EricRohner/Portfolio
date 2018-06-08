import React from 'react'

export default class extends React.Component {

    render() {
        return (
            <div>
                <header>
                    <a href="/about">About</a>
                    <a href="/workhistory">Work History</a>
                    <a href="/education">Education</a>
                    <a href="/contact">Contact</a>
                </header>
                <main className="CoCard">
                    <h2 className="Coh2">Eric Rohner</h2>
                    <h3 className="Coh3">Email: EricRohner22@gmail.com</h3>
                    <h3 className="Coh3">Phone: (360) 791-5099</h3>
                </main>

            </div>
        )
    }
}