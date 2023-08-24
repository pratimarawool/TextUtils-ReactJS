import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

function Navigation(props){
    return( 

        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <Link className="navbar-brand mx-3" to="/">{props.title}</Link>

            <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                <li className="nav-item active">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link active" to="/about">About</Link>
                </li>
                </ul>
            </div>

            <div className={`form-check form-switch text-${props.mode === 'light'?'dark':'light'}`}>
                <input className="form-check-input" type="checkbox" role="switch" onClick={props.toggleMode} id="flexSwitchCheckChecked"/>
                <label className="form-check-label mx-3" htmlFor="flexSwitchCheckChecked">Enable {props.mode === 'light'?'dark':'light'} mode</label>
            </div>

        </nav>
    );
}


Navigation.propTypes ={
    title:PropTypes.string.isRequired,
    aboutText:PropTypes.string.isRequired
}

Navigation.defaultProps ={
    title:"Please enter something",
    aboutText:"Please enter something"
}

export default Navigation