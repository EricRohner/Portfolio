import React from 'react'
import Header from '../Header'

export default class extends React.Component {

    render() {
        return (
            <div>
                <Header />
                <main className="CoCard">
                    <h2 className="Coh2">Eric Rohner</h2>
                    <h3 className="Coh3">Email: EricRohner22@gmail.com</h3>
                    <h3 className="Coh3">Phone: (360) 791-5099</h3>
                </main>

            </div>
        )
    }
}