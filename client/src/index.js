import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
//========================================
import './index.css';
import { initSocket } from './api/ws/socketController';
import App from './App';
import configureStore from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
const store = initSocket(configureStore());

root.render(
	<Provider store={store}>
		<App />
	</Provider>
);