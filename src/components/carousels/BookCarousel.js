import React, { Component } from 'react';

import { Icon, Popup, Grid } from 'semantic-ui-react'

import './styles/carousel.css';

const BookTile = ({ book }) => (
  <div className="tile">
    <div className="tile__media">
      <img className="tile__img" src={book.image} alt=""  />
    </div>
    <div className="tile__details">
      <div className="tile__title">
        <Grid columns='equal'>
          <Grid.Column>
            <Popup
              trigger={<Icon inverted name='info' circular />}
              content={book.description}
              offset={50}
              position='right center'
            />
          </Grid.Column>
          <Grid.Column>
            <Icon inverted name="remove bookmark" circular/>
          </Grid.Column>
          <Grid.Column>
            <Icon inverted name="like" circular />
          </Grid.Column>
        </Grid>


      </div>
    </div>
  </div>
)


class BookCarousel extends Component {

    render() {
      let books = []
        this.props.books.map((book) => {
          return books.push( <BookTile book={book} key={book.description} /> )
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
