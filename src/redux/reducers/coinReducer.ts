import { SET_FIRST_VISIT, SET_COIN_LIST } from '../actions/types'

interface IAction {
  type: string
  payload: any
}
const INITIAL_STATE = {
  coinList: {}
}

export default (state = INITIAL_STATE, { type, payload }: IAction) => {
  switch (type) {
    case SET_COIN_LIST:
      return { ...state, coinList: payload }
    default:
      return state
  }
}
