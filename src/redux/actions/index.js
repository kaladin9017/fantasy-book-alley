import {
  ADD_BOOK
} from './types';

export function changeBookCarousel (category) {
  return {
    type: category.name,
    payload: null
  }
}
export function addBook (book) {
  return {
    type: ADD_BOOK,
    payload: book
  }
}
