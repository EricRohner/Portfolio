import React from 'react'
import helio from './Helio.png';
import evergreen from './Evergreen.jpg'
import Header from '../Header'

export default class extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <main className="EdMain">
                    <h1 className="Edh1">Education</h1>
                    <div className="EdHelio">
                        <img src={helio} className="EdHelioImg" alt="helio"/>
                        <h2>Helio</h2>
                    </div>
                    <ul>
                        <li>Full stack web development</li>
                    </ul>
                    <div className="EdEvergreen">
                        <img src={evergreen} className="EdEvergreenImg" alt="evergreen"/>
                        <h2>The Evergreen State College</h2>
                    </div>
                    <ul>
                        <li>Bachelor's of Science 2008</li>
                        <li>Computer Science major</li>
                        <li>Biology minor</li>
                    </ul>
                </main>
            </div>
        )
    }
}