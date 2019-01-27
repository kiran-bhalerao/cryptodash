import { SET_FIRST_VISIT } from '../actions/types'

interface IState {
  isFirst: any
}
const INITIAL_STATE: IState = {
  isFirst: false
}

export default (state = INITIAL_STATE, { type, payload }: any) => {
  switch (type) {
    case SET_FIRST_VISIT:
      return { ...state, isFirst: payload }
    default:
      return state
  }
}
