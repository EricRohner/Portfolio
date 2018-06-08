// https://build-rmpwbfdtkn.now.sh/
import React from 'react';
import "./App.css"
import "./ComponentStyle.css"
import Routes from './Routes'
import Header from './Header'

export default class extends React.Component {
    // function
    //
    // init() {
    //     if (localStorage.getItem('hi') = null) {
    //         return localStorage.setItem('hi': true)
    //     }
    // }

    constructor(props) {
        super(props)
        this.state = {
            hide: true
        }
    }

    headHandler = () => {
        //change to false and remove headers from components when logic is fixed
        this.setState({hide: false})
    }

    render() {
        return (
            <div>

                <div hidden={this.state.hide}>
                    <Header/>
                </div>
                <Routes headHandler={this.headHandler}/>
            </div>
        )
    }
}
