import {
  CHANGE_QUESTION_CATEGOTY,
  CHANGE_QUESTION_DIFFICULTY,
  CHANGE_QUESTION_TYPE,
  CHANGE_QUESTION_AMOUNT,
  CHANGE_SCORE,
} from "./actionType";

const initialState = {
  question_category: "",
  question_difficulty: "",
  question_type: "",
  amount_of_question: 3,
  score: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_QUESTION_CATEGOTY:
      return {
        ...state,
        question_category: action.payload,
      };
    case CHANGE_QUESTION_DIFFICULTY:
      return {
        ...state,
        question_difficulty: action.payload,
      };
    case CHANGE_QUESTION_TYPE:
      return {
        ...state,
        question_type: action.payload,
      };
    case CHANGE_QUESTION_AMOUNT:
      return {
        ...state,
        amount_of_question: action.payload,
      };
    case CHANGE_SCORE:
      return {
        ...state,
        score: action.payload,
      };
    default:
      return state;
  }

  
};

export default reducer;
