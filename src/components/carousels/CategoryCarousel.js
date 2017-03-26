import React, { Component } from 'react';

import { Menu, Icon, Popup } from 'semantic-ui-react'

import './styles/carousel.css';

const BookTile = ({ book }) => (
  <div className="tile">
    <div className="tile__media">
      <img className="tile__img" src={book.image} alt=""  />
    </div>
    <div className="tile__details">
      <div className="tile__title">

        <Menu secondary fluid widths={3}>
          <Menu.Item>
            <Popup
              trigger={<Icon inverted name='info' circular />}
              content={book.description}
              offset={50}
              position='right center'
            />
            <Menu.Item>
              <Icon inverted name="remove bookmark" circular/>
            </Menu.Item>
          </Menu.Item>
          <Menu.Item >
            <Icon inverted name="like" circular />
          </Menu.Item>
        </Menu>
      </div>
    </div>
  </div>
)


class BookCarousel extends Component {

    render() {
      let books = []
        this.props.books.map((book) => {
          return books.push( <BookTile book={book} key={book.title} /> )
        });

        return(
          <div className="row">
            <div className="row__inner">
              { books }
            </div>
          </div>
        )
    }
}
export default BookCarousel
