import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import {
    Link 
} from "react-router-dom"; 

export class Navbar extends Component {
    static propTypes = {

    }

    render() {
        return (
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark" >
                <Link className="navbar-brand" to="/">NewsDaily</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
            </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active"><Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/apple">Apple  </Link> </li>
                        <li className="nav-item"><Link className="nav-link" to="/microsoft">Microsoft</Link> </li>
                        <li className="nav-item"><Link className="nav-link" to="/google">Google</Link> </li>
                        <li className="nav-item"><Link className="nav-link" to="/capgemini">Capgemini</Link> </li>
                        <li className="nav-item"><Link className="nav-link" to="/amazon">Amazon</Link> </li>
                    </ul>
                </div>
            </nav>
        )
    }
}
export default Navbar
