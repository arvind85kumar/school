import Navbaropt from "./Navbar"
import logo from '../logo.webp';
export default function Header() {
    return (<div id="header">Header
        <div id="logo">
            <img src={logo} className="App-logo" alt="logo" />
        </div>
        <Navbaropt />
    </div>)
}
