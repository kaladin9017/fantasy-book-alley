import React, { Component } from 'react';
import './styles/carousel.css';

const BookTile = ({ book }) => (
  <div className="tile">
    <div className="tile__media">
      <img className="tile__img" src={book.image} alt=""  />
    </div>
    <div className="tile__details">
      <div className="tile__title">
          { book.description }
      </div>
    </div>
  </div>
)


class BookCarousel extends Component {

    render() {
      let books = []
        this.props.books.map((book) => {
          books.push( <BookTile book={book} key={book.title} /> )
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
