import {
  SET_COIN_LIST,
  ADD_FEV_COIN,
  REMOVE_FEV_COIN,
  FETCH_PRICE
} from '../actions/types'
import _ from 'lodash'
interface IState {
  coinList: any
  fevCoinList: any
  priceList: any
}
const localFev = JSON.parse(localStorage.getItem('cryptodash@fevCoinList')!)
const INITIAL_STATE: IState = {
  coinList: {},
  fevCoinList: localFev ? localFev : [],
  priceList: []
}

export default (state = INITIAL_STATE, { type, payload }: any) => {
  switch (type) {
    case SET_COIN_LIST:
      return { ...state, coinList: payload }
    case ADD_FEV_COIN:
      return { ...state, fevCoinList: [...state.fevCoinList, payload] }
    case REMOVE_FEV_COIN:
      return { ...state, fevCoinList: _.pull(state.fevCoinList, payload) }
    case FETCH_PRICE:
      return { ...state, priceList: [...payload] }
    default:
      return state
  }
}
