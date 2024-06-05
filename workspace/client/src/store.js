import { legacy_createStore as createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import rootReducer from './modules/rootReducer'; // 올바른 경로 설정

const store = createStore(rootReducer, devToolsEnhancer());

export default store;
