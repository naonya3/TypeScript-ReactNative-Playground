import counter, {CounterActions, CounterState} from './counter/module'
import {createStore, combineReducers, Action} from 'redux'

export default createStore(combineReducers({　counter : counter }))

export type ReduxState = {
  counter : CounterState
}

export type ReduxAction = CounterActions | Action