import React, { Component } from 'react'
import { Menu, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

export default class FooterBar extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu secondary fluid widths={3} fixed={"bottom"}>
        <Menu.Item active={activeItem === 'search'} name='search'>
          <Link to="/search">
            <Icon size="large" inverted color="black" name='search'/>
          </Link>
        </Menu.Item>
        <Menu.Item active={activeItem === 'book'} name='book'>
          <Link to="/library">
            <Icon size="large" inverted color="black" name='book'/>
          </Link>
        </Menu.Item>
        <Menu.Item active={activeItem === 'home'} name='home'>
          <Link to="/">
            <Icon size="large" inverted color="black" name='home'/>
          </Link>
        </Menu.Item>
      </Menu>
    )
  }
}
