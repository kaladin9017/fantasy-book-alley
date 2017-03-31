import React from 'react';
import {
  Link
} from 'react-router-dom';

import { Menu, Icon } from 'semantic-ui-react'

const NavBar = () => (
  <Menu secondary borderless>
    <Menu.Item>
      <Link to="/">
        <Icon size="big" inverted color="black" name='home'/>
      </Link>
    </Menu.Item>

    <Menu.Item position='right'>
      <Link to="/library">
        <Icon inverted color="black" size='big' name='book'/>
      </Link>
    </Menu.Item>

  </Menu>

)

export default NavBar;
