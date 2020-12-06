import { ARTICLES } from '../constants';

export const loadArticles = () => ({
    type: ARTICLES.LOAD
})

export const setArticles = articles => ({
    type: ARTICLES.LOAD_SUCCESS,
    articles,
})

export const setError = error => ({
    type: ARTICLES.LOAD_FAIL,
    error,
})