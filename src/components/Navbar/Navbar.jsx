import "./navbar.css";
import CartWidget from '../CartWidget/CartWidget';
import Hero from '../Hero/Hero';


function Navbar() {
    return (
    <div className="header">
      <div className="container">
      <div className="navbar">
        <div className="logo">
          <img src="../assets/logo.png" width='190px' alt="logo"/>
        </div>
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Products</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Account</a></li>
            <li><CartWidget /></li>
          </ul>
        </nav>
      </div>
      <Hero/>
      </div>
    </div>    
     
    );
}

export default Navbar