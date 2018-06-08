import React from 'react'
import MuleHollow from "./MuleHollow.jpg"
import Crest from "./Crest.jpg"

export default class extends React.Component {

    render() {
        return (
            <div className="AbAll">
                <header>
                    <a href="/about">About</a>
                    <a href="/workhistory">Work History</a>
                    <a href="/education">Education</a>
                    <a href="/contact">Contact</a>
                    <a href="/cat">Cat</a>
                </header>
                <main className="AbMain">
                    <h1 className="Abh1">About</h1>
                    <section className="AbClimb">
                        <div className="AbClimbBody">
                            <img src={MuleHollow} className="AbMuleHollow" alt={"MuleHollow"}/>
                            <div className="AbClimbText">
                                <h2>Summer</h2>
                                <ul>
                                    <li>Sport 5.11B</li>
                                    <li>Trad 5.9+</li>
                                    <li>Free Solo 5.9</li>
                                </ul>
                            </div>
                        </div>
                    </section>
                    <section className="AbBoard">
                        <div className="AbBoardBody">
                            <img src={Crest} className="AbCrest" alt={"Crest"}/>
                            <div className="AbBoardText">
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