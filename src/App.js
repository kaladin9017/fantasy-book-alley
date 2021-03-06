import React, { Component } from 'react';

import { connect } from 'react-redux';

import RouteWithSubRoute from './components/common/RouteWithSubRoute';
import BookCarousel from './components/carousels/BookCarousel';
import CategoryCarousel from './components/carousels/CategoryCarousel';
import FeaturedBook from './components/common/FeaturedBook';


// ACTIONS
import { changeBookCarousel, addBook, selectBook } from './redux/actions/index';

class App extends Component {

  handleChange(category) {
    this.props.changeBookCarousel(category)
  }

  addBookToLibrary(book) {
    this.props.addBook(book);
  }
  changedFeaturedBook(book) {
    this.props.selectBook(book);
  }

  render() {
    let books = []

      for(let key in this.props.state.categories.featured) {
       books.push( this.props.state.categories.featured[key] )
      }
    return (
      <div className="App">
        <FeaturedBook book={this.props.state.featured} />
        <BookCarousel books={books} addBook={this.addBookToLibrary.bind(this)} selectBook={this.changedFeaturedBook.bind(this)} />
        <CategoryCarousel changeCategory={this.handleChange.bind(this)} categories={this.props.state.categories.categories} />
        {this.props.routes.map((route, i) => (
          <RouteWithSubRoute key={i} {...route}/>
        ))}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    state
  }
}

export default connect(mapStateToProps, { changeBookCarousel, addBook, selectBook })(App);
