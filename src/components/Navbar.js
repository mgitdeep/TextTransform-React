import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

const Navbar = (props) => {
  return (
    <nav className= {`navbar navbar-expand-lg bg-${props.mode}`} >
        <div className="container-fluid">
            <Link className="navbar-brand" to="/" style={{color: `${props.mode}` === 'dark'?'white':'black'}}>{props.title}</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" style={{backgroundColor: 'white'}}></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/" style={{color: `${props.mode}` === 'dark'?'white':'black'}}>Home</Link>
                </li>

                <li className="nav-item">
                <Link className="nav-link" to="/about" style={{color: `${props.mode}` === 'dark'?'white':'black'}}>{props.aboutText}</Link>
                </li>

                <li className="nav-item">
                <Link className="nav-link" to="/contact" style={{color: `${props.mode}` === 'dark'?'white':'black'}}>{props.contactUs}</Link>
                </li>
                
            </ul>
            <div className="form-check form-switch mx-3">
                <input className="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="flexSwitchCheckDefault"/>
                <label className={`form-check-label text-${props.mode==='dark'?'white':'black'}`} htmlFor="flexSwitchCheckDefault">{`${props.mode}`==='dark'?'Disable Dark Mode':'Enable Dark Mode'}</label>
            </div>
            {/* <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-info" type="submit">Search</button>
            </form> */}
            </div>
        </div>
    </nav>
  )
}

export default Navbar

Navbar.propTypes = { 
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string,
    contactUs: PropTypes.string
};

Navbar.defaultProps = {
    title: "Set title here",
    aboutText: "About us here",
    contactUs: "Contact us here"
  };