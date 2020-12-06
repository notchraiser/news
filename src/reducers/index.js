import articlesReducer from './articlesReducer';

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    articles: articlesReducer,
})

export default rootReducer;