// import './Header.css';
import { Link } from 'react-router-dom';
function LogHeader(){
    return(
      <div> 
      <div className="header navbar-expand" >
           <ul className="navbar">
           <li className="header navbar-expand">
               <Link className="nav-link" to="/login">Logout</Link>
           </li>
         </ul>
              <ul className="navbar">
                <li className="header navbar-expand">
                    <Link className="nav-link" to="/brownies">Brownies</Link>
                </li>
              </ul>

              <ul className="navbar ">
              <li className="header navbar-expand">
                  <Link className="nav-link" to="/Home">Puddings</Link>
              </li>
            </ul>
            <ul className="navbar ">
            <li className="header navbar-expand">
                <Link className="nav-link" to="/Home">Cakes</Link>
            </li>
          </ul>
          <ul className="navbar ">
          <li className="header navbar-expand">
              <Link className="nav-link" to="/Home">Cookies</Link>
          </li>
        </ul>
        <ul className="navbar mr-auto">
        <li className="header navbar-expand">
            <Link className="nav-link" to="/Home">cart</Link>
        </li>
      </ul>

      </div>
      </div>
    )
}
export default LogHeader
