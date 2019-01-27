import { SET_FIRST_VISIT, SET_COIN_LIST } from './types'

export const setFirstVisit = () => ({
  type: SET_FIRST_VISIT,
  payload: !localStorage.getItem('cryptodash@isfirst')
})

export const setCoinList = coinList => ({
  type: SET_COIN_LIST,
  payload: coinList
})
