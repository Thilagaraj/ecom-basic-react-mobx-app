import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'mobx-react';
import EcomStore from './Stores/Stores';
import { BrowserRouter } from 'react-router-dom'

const ecomStore=new EcomStore();
ReactDOM.render(
	<Provider ecomStore={ecomStore}>  
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>
, document.getElementById('root'));
registerServiceWorker();   
