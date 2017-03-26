import React from 'react';
import {
  Link
} from 'react-router-dom';

import { Menu, Segment, Icon, Input, TextArea } from 'semantic-ui-react'

const NavBar = () => (
  <Menu secondary>
    <Menu.Item>
      <Link to="/search">
        <Icon size="large" inverted color="black" name='search'/>
      </Link>
    </Menu.Item>

      <Menu.Item>
        <Input size="big" placeholder='Search...' transparent />
      </Menu.Item>

    <Menu.Item position='right'>
      <Link to="/library">
        <Icon inverted color="black" size='large' name='book'/>
      </Link>
    </Menu.Item>


  </Menu>

)

export default NavBar;
