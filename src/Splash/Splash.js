import "./Splash.css"
import {Link} from 'react-router-dom'
import React from 'react'
export default class extends React.Component{
    state = {
        accept: false
    }
    render() {
        return(
            <div>
                <h1>Eric Rohner</h1>
                <h2>Terms of use</h2>
                <p>By clicking on "accept" you agree that Eric is a pretty ok guy
                    and that if a large object were flying at his head you'd at
                    least try to warn him by yelling "Duck!" or something.</p>
                <form>
                <input type="checkbox" name="accept" checked={this.state.accept}
                       onChange={event => this.setState({accept: event.target.checked})}/>
                    <p>Accept</p>
                    <Link to="/contact">
                    <button type="submit" name="submit" hidden={!this.state.accept}>Continue</button>
                    </Link>
                </form>
            </div>
        )
    }
}