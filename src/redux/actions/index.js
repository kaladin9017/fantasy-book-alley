import {
  ADD_BOOK,
  SELECT_BOOK
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
export function selectBook (book) {
  return {
    type: SELECT_BOOK,
    payload: book
  }
}
