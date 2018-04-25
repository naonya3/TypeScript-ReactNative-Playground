// ActionCreator
import {Action} from 'redux'

enum ActionNames {
  INC = 'counter/increment',
  DEC = 'counter/decrement',
}

interface IncrementAction extends Action {
  type: ActionNames.INC
  plusAmount: number
}
export const incrementAmount = (amount: number): IncrementAction => ({
  type: ActionNames.INC,
  plusAmount: amount
})

interface DecrementAction extends Action {
  type: ActionNames.DEC
  minusAmount: number
}

export const decrementAmount = (amount: number): DecrementAction => ({
  type: ActionNames.DEC,
  minusAmount: amount
})

//reducer
export interface CounterState {
  num: number
}
  
export type CounterActions = IncrementAction | DecrementAction

const initialState:CounterState = {num: 0};

export default function reducer(state: CounterState = initialState, action: CounterActions): CounterState {
  var newState = Object.assign({}, state)
  switch (action.type) {
    case ActionNames.INC:
      newState.num = state.num + action.plusAmount
      break
    case ActionNames.DEC:
      newState.num = state.num - action.minusAmount
      break
    default:
      break
  }
  return newState
}