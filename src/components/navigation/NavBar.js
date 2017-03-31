import React from 'react';
import {
  Link
} from 'react-router-dom';

import { Menu, Icon, Header } from 'semantic-ui-react'

const NavBar = () => (
  <Menu secondary borderless>
    <Menu.Item content>
      <Link to="/">
        <Icon size="big" inverted color="black" name='home'/>
      </Link>
    </Menu.Item>

    <Menu.Item>
      <h2 className="header">Discover Awesome Fantasy Books</h2>
    </Menu.Item>

    <Menu.Item content position='right'>
      <Link to="/library">
      <Header as='h3'>
        <Icon.Group size='large'>
          <Icon name='book' />
        </Icon.Group>
        Library
      </Header>
      </Link>
    </Menu.Item>

  </Menu>

)

export default NavBar;
