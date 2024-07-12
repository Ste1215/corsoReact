import { configureStore } from '@reduxjs/toolkit'
import {counterReducer} from './CounterSlice'
import {citiesReducer} from './citiesSlice'

export default configureStore({
  reducer: {
    counter: counterReducer,
    cities: citiesReducer,
  },
})