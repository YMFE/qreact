import { INCREMENT, DECREMENT, RESET } from './actionTypes';

export function increaseAge() {
  return {
    type: INCREMENT
  };
}

export function decreaseAge() {
  return {
    type: DECREMENT
  };
}

export function setAge(age) {
  return {
    type: RESET,
    age,
  };
}
