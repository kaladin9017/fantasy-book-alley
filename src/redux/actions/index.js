// import {
//   BEST_OF_2016,
//   EPIC_FANTASY,
//   LOW_FANTASY,
//   ANTI_HERO,
//   COMING_AGE,
//   YA
// } from './types';

export function changeBookCarousel (category) {
  return {
    type: category.name,
    payload: null
  }
}
