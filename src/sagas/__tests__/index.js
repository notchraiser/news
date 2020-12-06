import { runSaga } from 'redux-saga';
import { searchtext as search, handleArticlesLoad } from '../';
import { setArticles } from '../../actions';
import * as api from '../../api';

test('should load articles & handle in case of success', async() => {
    //dispatched actions
    const dispatchedActions = [];
    const mockedArticles = ['m1', 'm2'];
    api.fetchArticles = jest.fn(() => Promise.resolve(mockedArticles));
    const fakestore = {
        getState: () => ({load: false, articles: [], error: '', searchtext: "" }),
        dispatch: action =>  dispatchedActions.push(action),
    }
    await runSaga(fakestore, handleArticlesLoad).done;
    console.log(dispatchedActions);
    expect(api.fetchArticles.mock.calls.length).toBe(1);
    expect(dispatchedActions).toContainEqual(setArticles(mockedArticles));
})
