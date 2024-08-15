import {combineReducers, configureStore} from '@reduxjs/toolkit';
import  {thunk}  from 'redux-thunk';
import productsReaducer from "./slices/productsSlice" 
import productReducer from "./slices/productSlice"
import authReducer from "./slices/authSlice"


const reducer =  combineReducers({
    productsState : productsReaducer,
    productState : productReducer,
    authState : authReducer
})

const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware => getDefaultMiddleware().concat(thunk)),
})
    

export default store;