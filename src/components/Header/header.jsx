import './header.css';
import {NavLink} from "react-router-dom";

function Header() {
   return (
      <header className="Header">
         <nav>
            <div className="LogoHeader">logo</div>
            <ul>
               <li><NavLink  to="/"> Home </NavLink></li>
               <li><NavLink  to="/catalog"> Catalog </NavLink></li>
               <li><NavLink  to="/cart"> Cameras </NavLink></li>
            </ul>
         </nav>
      </header>
   );
}

export default Header;