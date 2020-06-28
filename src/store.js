import { createStore } from 'redux'
import defaultStore from './defaultStore'
import reducer from './reducer'

// STEP 1 aquí se crea tu store. Tu Store de crearse con un Reducer ya definido.
// defaultStore es opcional, pero te puede servir para dar un store inicial a tu aplicación

const store = createStore(reducer, defaultStore)

export default store
