import './Navbar.css';
function Navbar(){
    return (
        <header className="navbar">
         <div className="logo-container">
            <span className="logo-icon">🔧</span>
            <span className="logo-text">Oragon <strong>Crest</strong></span>
         </div>
<nav className="nav-links">
    <a href="#home">Home</a>
    <a href="#about">About</a>
    <a href="#services">Services</a>
    <a href="#reviews">Reviews</a>
    <a href="#blog"Blog></a>
    <a href="#contact">Contact</a>
   
</nav>
  <div className="nav-actions">
    <span className="phone-number">📞+254 796 274700</span>
    <button className="cta-button">Request a Service</button>
  </div>


        </header>
    )
}
export default Navbar