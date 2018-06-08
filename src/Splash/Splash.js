import {Link} from 'react-router-dom'
import React from 'react'
export default class extends React.Component{
    state = {
        accept: false
    }
    render() {
        return(
            <div className={"Spdiv"}>
                <section className={"Spsection"}>
                <h1 className={"Sph1"}>Warning!</h1>
                <h2 className={"sph2"}>Terms of use:</h2>

                <p>By accepting these terms you agree that Eric is a pretty ok guy
                    and that if a large object were flying at his head you'd at
                    least try to warn him or something.</p>
                <form className={"Spform"}>
                    <input type="checkbox" name="accept" checked={this.state.accept}
                           onChange={event => this.setState({accept: event.target.checked})}/>
                    <p className="SpAccept">Accept</p>
                    <Link to="/about">
                        <button type="submit" name="submit" hidden={!this.state.accept}>Continue</button>
                    </Link>
                </form>
                </section>
            </div>
        )
    }
}