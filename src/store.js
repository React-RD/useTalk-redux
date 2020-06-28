import { createStore } from 'redux'
import defaultStore from './defaultStore'
import reducer from './reducer'

const store = createStore(reducer, defaultStore)

export default store
