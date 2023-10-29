import './header.css';

function Header() {
   return (
      <header className="Header">
         <nav>
         <div className="LogoHeader">logo</div>
         <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/">Catalog</a></li>
            <li><a href="/">Camera</a></li>
         </ul>
         </nav>
      </header>
   );
}

export default Header;