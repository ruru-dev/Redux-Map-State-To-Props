/**
 * A file with functions that determine how to serve your state.
 * These functions will operate on the data in state.js
 */
import { combineReducers } from 'redux'

const user = (state = null) => state

const cars = (state = []) => state

export default combineReducers({ user, cars })