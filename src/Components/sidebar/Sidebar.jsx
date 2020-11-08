import React from 'react';
import { slide as Menu } from 'react-burger-menu';

const Sidebar = (props) => {
  return (
    <Menu>
      <a className="menu-item" href="/">
        Home
      </a>
      <a className="menu-item" href="/History">
        Tidligere-bestillinger
      </a>
      <a className="menu-item" href="/">
        Ansatt
      </a>
    </Menu>
  );
};

export default Sidebar;