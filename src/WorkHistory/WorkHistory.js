import React from 'react'
import Tsunami from './Tsunami.png'
import SnowBird from './SnowBird.gif'

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
                <main className="WhMain">
                    <h1 className="Whh1">Work History</h1>
                    <div className="WhTsunami">
                        <img src={Tsunami} className="WhTsunamiImg" alt="Tsunami"/>
                        <h2>Tsunami Sushi Bar 2015-2018</h2>
                    </div>
                    <ul>
                        <li>Sushi chef</li>
                        <li>Line expediter</li>
                        <li>Skilled in sashimi, nigiri, and breakdown of whole fish</li>
                    </ul>
                    <div className="WhSnowBird">
                        <img src={SnowBird} className="WhSnowBirdImg" alt="SnowBird"/>
                        <h2>The Aerie, Snowbird 2012-2015</h2>
                    </div>
                    <ul>
                        <li>Line cook</li>
                        <li>Trainer</li>
                        <li>Expediter and co-ordinator between multiple stations</li>
                        <li>Fine dining including baking, sauce preparation and dish presentation</li>
                    </ul>
                </main>
            </div>
        )
    }
}