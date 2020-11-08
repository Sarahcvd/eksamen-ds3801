import React from 'react';
import { slide as Menu } from 'react-burger-menu';

const Sidebar = (props) => {
  return (
    <Menu>
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