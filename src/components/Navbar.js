import { Link,useNavigate} from 'react-router-dom';
import logo from '.././logo.png';

function Navbaropt() {
 const navigate = useNavigate();
  const logout= ()=>{
    localStorage.clear();
    navigate('/register');
  }

  const auth = localStorage.getItem('useInfo') ;
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/"><img alt="logo" src={logo} /></Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">About Us</Link>
          </li>         
            {auth ? <Link className="nav-link" onClick={logout}>Logout</Link> :   <Link className="nav-link" to="/register">Signup</Link>}
        
          <li className="nav-item">
            <Link className="nav-link" to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbaropt;