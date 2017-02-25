import {combineReducers} from "redux";

const checkBox = (store, action) => {
  if (action.type === "TOGGLE_CHECK") {
    return {
      checked: !store.checked
    };
  }

  return store || {checked: false};
};

const number = (store, action) => {
  if (action.type === "CLEAR_CHECK") {
    return {
      value: 0
    };
  } else if  (action.type === "INC_NUMBER") {
    return {
      value: store.value + 1
    };
  } else if (action.type === "DEC_NUMBER") {
    return {
      value: store.value - 1
    };
  } else if  (action.type === "INC_NUMBER_FIVE") {
    return {
      value: store.value + 6
    };
  } else if (action.type === "DEC_NUMBER_FIVE") {
    return {
      value: store.value - 5
    };
  }

  return store || {value: 0};
};

export default combineReducers({
  checkBox,
  number
});
