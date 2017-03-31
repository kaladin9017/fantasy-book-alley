import React, { Component } from 'react';
import RouteWithSubRoute from '../common/RouteWithSubRoute';


import { connect } from 'react-redux';

import BookTile from './BookDisplay';

import './styles/library.css';

class Library extends Component {

  createShelve(books, key) {
    return(
      <div key={key} className='shelf-row'>
        <div className='shelf'></div>
        <div className='shelf-thickness'></div>
        <div className='books flexbox-row flexbox-align-center'>
          {books}
        </div>
      </div>
    )
  }

  render() {
    let books = [];
    let shelves = []
    for (let i = 0; i < this.props.library.length; i ++) {
      books.push(<BookTile key={i} book={this.props.library[i]} />)
      if (books.length % 3 === 0) {
        shelves.push(this.createShelve(books, i));
        books = [];
      }
      else if (i === this.props.library.length -1) {
        shelves.push(this.createShelve(books, i));
      }
    }

    return (
      <center>
        {/* <Grid columns={5}>
          {books}
        </Grid> */}
        <div className='bookcase' id='bookcase'>
          <div className='bookcase-left-side bookcase-side'></div>
          <div className='bookcase-right-side bookcase-side'></div>
          <div className='shelfs'>
            { this.props.library.length !== 0 ? shelves : <h2>You have no books saved</h2> }
          </div>
        </div>

        {this.props.routes.map((route, i) => (
          <RouteWithSubRoute key={i} {...route}/>
        ))}
      </center>
    )
  }
}

function mapStateToProps(state) {
  return {
    library: state.library
  }
}
export default connect(mapStateToProps)(Library);
