// index.js
import { combineReducers, legacy_createStore } from 'redux';
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client';
import App from './App';
import authReducer from './reducers/authReducer';

const rootReducer = combineReducers({
  auth: authReducer,
});

const store = legacy_createStore(rootReducer);
const rootElement = document.getElementById('root');

const root = createRoot(rootElement);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
