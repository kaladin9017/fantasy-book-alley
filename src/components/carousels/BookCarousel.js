import React, { Component } from 'react';

import { Icon, Popup, Grid, Header } from 'semantic-ui-react'

import './styles/carousel.css';

const BookTile = ({ book, bookmark, select }) => (
  <div className="tile">
    <div className="tile__media">
      <img className="tile__img" src={book.image} alt=""  />
    </div>
    <div className="tile__details">
      <div className="tile__title">
        <Grid columns='equal'>
          <Grid.Column>
            <Popup
              trigger={<Icon inverted className="icons" name='info' circular />}
              content={book.description}
              offset={50}
              position='right center'
            />
          </Grid.Column>
          <Grid.Column>
            <Popup
              trigger={ <Icon inverted className="icons" name="remove bookmark" circular onClick={bookmark.bind(this,book)} /> }
              content={"Bookmark/Save to Library"}
              offset={50}
              position='right center'
            />
          </Grid.Column>
          <Grid.Column>
            <Popup
              trigger={ <Icon inverted className="icons" name="eye" circular onClick={select.bind(this,book)} /> }
              content={"Select"}
              offset={50}
              position='right center'
            />
          </Grid.Column>
        </Grid>


      </div>
    </div>
  </div>
)


class BookCarousel extends Component {
  handlClick(book) {
    this.props.addBook(book)
  }
  handleSelect(book) {
    this.props.selectBook(book)
  }
  render() {
    let books = []
      this.props.books.map((book) => {
        return books.push( <BookTile book={book} key={book.description} bookmark={this.handlClick.bind(this)} select={this.handleSelect.bind(this)} /> )
      });

      return(
        <div className="row">
          <div className="row__inner">
            <Header as='h3'>
              <Icon name='filter' />
              <Header.Content>
                {this.props.books[0].category}
              </Header.Content>
            </Header>
            { books }
          </div>
        </div>
      )
  }
}
export default BookCarousel
