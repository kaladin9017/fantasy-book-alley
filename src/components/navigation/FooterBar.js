import React, { Component } from 'react'
import { Menu, Icon } from 'semantic-ui-react'

export default class FooterBar extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu secondary fluid widths={3}>
        <Menu.Item active={activeItem === 'search'} name='search' onClick={this.handleItemClick}>
          <Icon size="large" inverted color="black" name='search'/>
        </Menu.Item>
        <Menu.Item active={activeItem === 'book'} name='book' onClick={this.handleItemClick}>
          <Icon size="large" inverted color="black" name='book'/>
        </Menu.Item>
        <Menu.Item active={activeItem === 'home'} name='home' onClick={this.handleItemClick}>
          <Icon size="large" inverted color="black" name='home'/>
        </Menu.Item>
      </Menu>
    )
  }
}
