import {combineReducers} from 'redux'
import reducer from './BankReducer'

const reducers = combineReducers({
    bank: reducer
})

export default reducers;

export type State = ReturnType<typeof reducers>