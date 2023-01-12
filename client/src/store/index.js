import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import createSagsMiddleware from 'redux-saga';
//================================================
import rootReducers from './reducers';
import rootSaga from '../sagas';

const sagaMiddleware = createSagsMiddleware();
const midleware = applyMiddleware(sagaMiddleware);

export default function configureStore() {
	const store = createStore(rootReducers, composeWithDevTools(midleware));
	sagaMiddleware.run(rootSaga, store.dispatch);
	return store;
};