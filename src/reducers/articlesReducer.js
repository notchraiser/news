import { ARTICLES } from "../constants";

const initialState = {
  load: false,
  articles: [],
  error: '',
};

const articlesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ARTICLES.LOAD:
      return { ...state, load: true };
    case ARTICLES.LOAD_SUCCESS:
      return { ...state, load: false, articles: [...action.articles], error: '' };
    case ARTICLES.LOAD_FAIL:
      return { ...state, load: false, articles: [],  error: action.error };
    default:
      return state;
  }
};

export default articlesReducer;