// import React, { useState } from 'react'
// import './Header.css';
// import { NavLink } from 'react-router-dom';


// function Header() {
//   const [showNavbar, setShowNavbar] = useState(false)
//       const handleShowNavbar = () =>{
//         setShowNavbar(!showNavbar)
//       }
//   return (
      
  
//     <nav className='navbar'>
//       <div className='container'>
//       <div className='logo'>
//         <h3>TAMILNADU TOURISM</h3>
//       </div>
//       <div className='menu-icon' onClick={handleShowNavbar}>
//         <i className='fas fa-bars'></i>
//       </div>
//       <div className={`nav-elements ${showNavbar && 'active'}` }>
//         <ul>
//           <li><NavLink to = "/"> Home </NavLink></li>
//           <li><NavLink to = "/">Places to visit </NavLink></li>
//           <li><NavLink to = "/">Best time to visit </NavLink></li>
//           <li><NavLink to = "/">Packages </NavLink></li>
//           <li><NavLink to = "/">Destination </NavLink></li>
//           <li><NavLink to = "/">Food </NavLink></li>
//         </ul>
//       </div>
//       </div>
      
//     </nav>
//   )
// }

// export default Header
import React from 'react';
import './Header.css';
import { Navbar, Nav } from 'react-bootstrap';


const Header = () => {
  return (
    <Navbar  expand="lg">
      <Navbar.Brand href="#">tamilnadu tourism</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="/" className="nav-link">Home</Nav.Link>
          <Nav.Link href="/about" className="nav-link">Places to visit</Nav.Link>
          <Nav.Link href="/benefits" className="nav-link">Best time to visit</Nav.Link>
          <Nav.Link href="/blog" className="nav-link">Packages </Nav.Link>
          <Nav.Link href="/view" className="nav-link">Destination</Nav.Link>
          <Nav.Link href="/view" className="nav-link">Food</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;