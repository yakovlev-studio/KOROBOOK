import { createStore, combineReducers, applyMiddleware } from 'redux'
import fotoBookReducer from './Fotobook/reducers/fotoBook'



const rootReducer = combineReducers({
    fotoBook: fotoBookReducer 
})

export const configureStore = () => {
    return createStore(
        rootReducer
    )
}


