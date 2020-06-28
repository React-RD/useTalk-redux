import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'

// STEP 3 Una vez que has creado tu store, estas listo para usarlo.
// Ahora hay que hacer uso de un wrapper llamado react-redux para crear un Provider y distribuir el store en la app.

import { Provider } from 'react-redux'
import store from './store'

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
  document.getElementById('root')
);
