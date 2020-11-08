import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import logo from '../../images/logo.png'

const sideBarStyle = {
  backgroundColor: "#815757",
  height: "250px",
  width: "500px"
}

const logoStyle = {
  width: "150px",
  margin: "40px 0px 0px 35px"
}

const Sidebar = (props) => {
  return (
    <Menu>
      <div style={sideBarStyle}> <img src={logo} style={logoStyle}/> </div>
      <a className="menu-item" href="/">
        Home
      </a>
      <a className="menu-item" href="/History">
        Ordrehistorikk
      </a>
      <a className="menu-item" href="/">
        Ansatt
      </a>
    </Menu>
  );
};

export default Sidebar;