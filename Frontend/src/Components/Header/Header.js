// import './Header.css';
import { Link } from 'react-router-dom';
function Header(){
    return(
      <div> 
      <div className="header navbar-expand" >
           <ul className="navbar">
           <li className="header navbar-expand">
               <Link className="nav-link" to="/login">Login</Link>
           </li>
         </ul>
              <ul className="navbar">
                <li className="header navbar-expand">
                    <Link className="nav-link" to="/Fhome">Brownies</Link>
                </li>
              </ul>

              <ul className="navbar ">
              <li className="header navbar-expand">
                  <Link className="nav-link" to="/Fhome">Puddings</Link>
              </li>
            </ul>
            <ul className="navbar ">
            <li className="header navbar-expand">
                <Link className="nav-link" to="/Fhome">Cakes</Link>
            </li>
          </ul>
          <ul className="navbar ">
          <li className="header navbar-expand">
              <Link className="nav-link" to="/Fhome">Cookies</Link>
          </li>
        </ul>
        <ul className="navbar mr-auto">
        <li className="header navbar-expand">
            <Link className="nav-link" to="/Fhome">cart</Link>
        </li>
      </ul>

      </div>
      </div>
    )
}
export default Header