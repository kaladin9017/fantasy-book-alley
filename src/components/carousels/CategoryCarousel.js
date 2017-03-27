import React, { Component } from 'react';

import { Header} from 'semantic-ui-react'
import './styles/CategoryCarousel.css';

const CategoryTile = ({ category, changeCategory }) => (
  <div className="category" onClick={changeCategory.bind(this,category)}>
    <div className="category__media">
      <img className="category__img" src={category.image} alt=""  />
    </div>
    <div className="category__details">
      <div className="category__title">
        <Header color="yellow" as='h2' icon textAlign='center'>
          { category.name }
        </Header>
      </div>
    </div>
  </div>
)


class CategoryCarousel extends Component {
  handleChange(category) {
    this.props.changeCategory(category);
  }
  render() {
    let categories = [];
      this.props.categories.map((category) => {
        return categories.push( <CategoryTile changeCategory={this.props.changeCategory.bind(this)} category={category} key={category.image} /> )
      });

      return(
        <div className="row">
          <div className="row__inner">
            { categories }
          </div>
        </div>
      )
  }
}
export default CategoryCarousel
