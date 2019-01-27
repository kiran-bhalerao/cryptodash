import { SET_FIRST_VISIT } from '../actions/types'

interface IAction {
  type: string
  payload: any
}
const INITIAL_STATE = {
  isFirst: false
}

export default (state = INITIAL_STATE, { type, payload }: IAction) => {
  switch (type) {
    case SET_FIRST_VISIT:
      return { ...state, isFirst: payload }
    default:
      return state
  }
}
