import React from 'react'
import Outside from "./MuleHollow.jpg"
import Nitro from "./Crest.jpg"

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
                <main className="AbMain">
                    <h1 className="Abh1">About</h1>
                    <section className="AbClimb">
                        <div className="AbClimbBody">
                            <img src={Outside} className="Outside" alt={"Outside"}/>
                            <div className="AbClimbText">
                                <h2>Summer</h2>
                                <ul>
                                    <li>Sport 5.11</li>
                                    <li>Trad 5.9</li>
                                    <li>Free Solo 5.8</li>
                                </ul>
                            </div>
                        </div>
                    </section>
                    <section className="AbBoard">
                        <div className="AbBoardBody">
                            <img src={Nitro} className="Nitro" alt={"Nitro"}/>
                            <div className="BoardText">
                                <h2>Winter</h2>
                                <ul>
                                    <li>Brighton</li>
                                    <li>Snowbird</li>
                                    <li>Pow and trees</li>
                                </ul>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        )
    }
}