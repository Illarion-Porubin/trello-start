import { configureStore } from '@reduxjs/toolkit';
import trelloReducer from './trelloReducer'


export default configureStore({
    reducer: {
        todos: trelloReducer,
    }
})