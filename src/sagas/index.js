
import { call, put, takeEvery, select } from 'redux-saga/effects';
import { ARTICLES } from '../constants';
import { setArticles, setError } from '../actions';
import { fetchArticles } from '../api';

// watcher saga -> actions -> worker saga
export const searchtext = state => state.articles.searchtext;
export function* handleArticlesLoad() {
    try {      
        const search = yield select(searchtext);   
        const articles = yield call(fetchArticles, search);
        yield put(setArticles(articles));
    } catch (error) {
        console.log(error);
        yield put(setError(error.toString()));
    }
}

function* rootSaga() {
   yield takeEvery(ARTICLES.LOAD, handleArticlesLoad); 
}

export default rootSaga;