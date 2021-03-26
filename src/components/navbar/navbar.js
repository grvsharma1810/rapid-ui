import logo from './assets/logo.svg';
import './navbar.css';
import { check } from '../../rapid-ui';
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar bg-primary" id="main-navbar">
      <div className="brand">
        <img className="brand-img" src={logo} alt="RAPID UI" />
        <div className="brand-title">RAPID UI</div>
      </div>
      <div className="nav-links">
        <ul>
          <Link to="/">
            <li><a className="btn-solid primary" href="/#">Home</a></li>
          </Link>
          <Link to="/docs/getting-started">
            <li><a className="btn-solid primary" href="/#">Docs</a></li>
          </Link>
          <li><a className="btn-solid primary" href="https://github.com/grvsharma1810/rapid-ui-doc-site" target="_blank" rel="noreferrer"><i className="fa fa-github" aria-hidden="true"></i> GitHub</a></li>
          <li><a className="btn-solid primary" href="https://gaurav-sharma-component-lib.netlify.app/style.css" target="_blank" download="style.css" rel="noreferrer">Download</a></li>


          <li className="text-heading-bold bg-secondary component-heading">Components</li>

          <Link to="/docs/navbar">
            <li><button className="btn-link text-white component" onClick={() => check("main-navbar")}>Navbars</button></li>
          </Link>
          <Link to="/docs/button">
            <li><button className="btn-link text-white component" onClick={() => check("main-navbar")}>Buttons</button></li>
          </Link>
          <Link to="/docs/avatar">
            <li><button className="btn-link text-white component" onClick={() => check("main-navbar")}>Avatar</button></li>
          </Link>
          <Link to="/docs/badge">
            <li><button className="btn-link text-white component" onClick={() => check("main-navbar")}>Badges</button></li>
          </Link>
          <Link to="/docs/card">
            <li><button className="btn-link text-white component" onClick={() => check("main-navbar")}>Card</button></li>
          </Link>
          <Link to="/docs/list">
            <li><button className="btn-link text-white component" onClick={() => check("main-navbar")}>List</button></li>
          </Link>
          <Link to="/docs/input">
            <li><button className="btn-link text-white component" onClick={() => check("main-navbar")}>Input</button></li>
          </Link>
          <Link to="/docs/modal">
            <li><button className="btn-link text-white component" onClick={() => check("main-navbar")}>Modal</button></li>
          </Link>
          <Link to="/docs/image">
            <li><button className="btn-link text-white component" onClick={() => check("main-navbar")}>Image</button></li>
          </Link>
          <Link to="/docs/toast">
            <li><button className="btn-link text-white component" onClick={() => check("main-navbar")}>Toast</button></li>
          </Link>
          <Link to="/docs/typography">
            <li><button className="btn-link text-white component" onClick={() => check("main-navbar")}>Typography</button></li>
          </Link>
          <Link to="/docs/spinner">
            <li><button className="btn-link text-white component" onClick={() => check("main-navbar")}>Spinner</button></li>
          </Link>
        </ul>
      </div>
      <div className="toggle" onClick={() => check("main-navbar")}><i className="fa fa-bars"></i></div>
    </nav>
  )
}

export default Navbar;