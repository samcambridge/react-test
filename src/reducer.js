import questions from './data.js';

const initialState = {
  questions: questions,
  currentQuestion: null,
  selectedOptions: [],
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case 'questions/setCurrent':
      return {
        ...state,
        currentQuestion: state.questions.find(q => q.id === parseInt(action.payload)),
      };
    case 'options/add':
      return {
        ...state,
        selectedOptions: state.selectedOptions.concat(action.payload),
      };
    case 'options/reset':
      return {
        ...state,
        selectedOptions: [],
      };
    default:
      return state;
  }
}
