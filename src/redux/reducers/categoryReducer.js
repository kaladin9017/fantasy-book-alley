import epicFantasy from '../../seed/epic-fantasy';
import lowFantasy from '../../seed/low-fantasy';

import {
  BEST_OF_2016,
  EPIC_FANTASY,
  LOW_FANTASY,
  ANTI_HERO,
  COMING_AGE,
  YA
} from '../actions/types';

const initialState = {
  featured: epicFantasy,
  epicFantasy,
  lowFantasy,
  categories: [
    {name: BEST_OF_2016, image: "https://www.nerdmuch.com/wp-content/uploads/2016/02/new-fantasy-and-scifi-books-to-read.jpg"},
    {name: EPIC_FANTASY, image: "http://www.thelostwordsbooks.com/wp-content/uploads/2014/04/writing-taste-book-shelf.jpg"},
    {name: LOW_FANTASY, image: "http://www.barnesandnoble.com/blog/sci-fi-fantasy/wp-content/uploads/sites/4/2016/11/hm2.jpg"},
    {name: ANTI_HERO, image: "https://quitethenovelidea.com/wp-content/uploads/sites/10/2016/05/antiheroesbooks.png"},
    {name: COMING_AGE, image: "http://i.gr-assets.com/images/S/compressed.photo.goodreads.com/hostedimages/1482776869i/21547878._SY540_.jpg"},
    {name: YA, image: "http://whatsarahread.com/wp-content/uploads/sites/113/2015/01/Fantasy101.jpg"}]
};


export default function(state = initialState, action) {
  switch (action.type) {
    case EPIC_FANTASY:
    return Object.assign({}, state, {featured: epicFantasy})
    case LOW_FANTASY:
    return Object.assign({}, state, {featured: lowFantasy})
    default:
      return state;
  }
}
