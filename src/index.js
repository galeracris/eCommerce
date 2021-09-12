import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { StateProvider } from './components/StateProvider/StateProvider';
import reducer, { initialState } from './components/Reducer/reducer';
import { FirebaseAppProvider }from 'reactfire';
import getData from '../src/components/Firebase/index';


ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
    <FirebaseAppProvider firebaseConfig={getData}>
      <Suspense fallback={'Cargando Cerveceria 1930... Bienvenid@ !!!'}>
    <App />
    </Suspense>
    </FirebaseAppProvider>
    </StateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
