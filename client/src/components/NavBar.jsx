import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import Menu from "./Menu";
import "./NavBar.css";

export default class CustomNavBar extends Component {
  render() {
    return (
      <div className="sticky-nav">
        <Navbar default collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/">
                <img
                  src={require("./../images/sgp_logo.png")}
                  width="68"
                  height="48"
                />
              </Link>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
            <Menu num={1} href="/sgp-search">
              HOME
            </Menu>
            <Menu num={2} href="/sgp-search/documentation">
              DOCUMENTATION
            </Menu>
            <Menu num={3} href="/sgp-search/about">
              ABOUT
            </Menu>
          </Nav>
        </Navbar>
      </div>
    );
  }
}

// import React from 'react';
// import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink, Container, View, Mask } from 'mdbreact';
// import { BrowserRouter as Router } from 'react-router-dom';

// class FullPageIntroWithNonFixedNavbar extends React.Component {
//   constructor(props) {
//   super(props);
//     this.state = {
//       collapse: false,
//       isWideEnough: false,
//       };
//   this.onClick = this.onClick.bind(this);
// }

// onClick(){
//   this.setState({
//     collapse: !this.state.collapse,
//   });
// }
// render() {
// return (
//     <div>
//         <Router>
//           <Navbar color="black" dark expand="md" scrolling>
//           <Container>
//             <NavbarBrand href="/">
//                 <strong>Navbar</strong>
//             </NavbarBrand>
//             <NavbarToggler onClick = { this.onClick } />
//           <Collapse isOpen = { this.state.collapse } navbar>
//             <NavbarNav left>
//               <NavItem active>
//                   <NavLink to="#">Home</NavLink>
//               </NavItem>
//               <NavItem>
//                   <NavLink to="#">Link</NavLink>
//               </NavItem>
//               <NavItem>
//                   <NavLink to="#">Profile</NavLink>
//               </NavItem>
//             </NavbarNav>
//           </Collapse>
//           </Container>
//         </Navbar>
//       </Router>
//       <View src='https://mdbootstrap.com/img/Photos/Others/img%20(51).jpg' >
//         <Mask overlay="black-strong" style={{flexDirection: 'column', height: '100vh'}} className="flex-center  text-white text-center">
//             <h2>This Navbar isn't fixed</h2>
//             <h5>When you scroll down it will disappear</h5>
//             <br/>
//             <p>Full page intro with background image will be always displayed in full screen mode, regardless of device </p>
//         </Mask>
//       </View>
//       <Container className="text-center my-5">
//         <p align="justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis  aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia  deserunt mollit anim id est laborum.</p>
//        </Container>
//   </div>
// );
// }
// }

// export default FullPageIntroWithNonFixedNavbar;
