import {applyMiddleware, createStore} from 'redux'
import { reducer as rootReducer } from './reducer'
import thunk from "redux-thunk";

export const store = createStore(rootReducer, applyMiddleware(thunk))