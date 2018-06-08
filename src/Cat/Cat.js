import React from 'react'
import Maddie from "./Maddie.jpg"
import Header from '../Header'

export default class extends React.Component {

    render() {
        return (
            <div>
                <Header />
                <img src={Maddie} className="CaMaddie" alt={"Maddie the cat"}/>
            </div>
        )
    }
}