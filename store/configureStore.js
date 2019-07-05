import { createStore, combineReducers } from 'redux'
import fotoBookReducer from './Fotobook/reducers/fotoBook'


const rootReducer = combineReducers({
    fotoBook: fotoBookReducer 
})

const configureStore = () => {
    return createStore(rootReducer)
}

export default configureStore


