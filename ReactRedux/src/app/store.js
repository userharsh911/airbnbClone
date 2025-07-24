import {configureStore} from '@reduxjs/toolkit'
import TodoReducer from '../features/todoSlice'
export const store =  configureStore({
    reducer : TodoReducer,
})