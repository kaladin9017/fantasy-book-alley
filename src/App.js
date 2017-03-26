import React, { Component } from 'react';

import { connect } from 'react-redux';

import RouteWithSubRoute from './components/common/RouteWithSubRoute';
import BookCarousel from './components/carousels/BookCarousel';
import FeaturedBook from './components/common/FeaturedBook';



class App extends Component {

  render() {
    let books = []

      for(let key in this.props.state.example.epicFantasy) {
       books.push( this.props.state.example.epicFantasy[key] )
       books.push( this.props.state.example.lowFantasy[key] )
      }

    return (
      <div className="App">
        <FeaturedBook />
        <BookCarousel books={books} />
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
export default connect(mapStateToProps)(App);
