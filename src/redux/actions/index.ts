import {
  SET_FIRST_VISIT,
  SET_COIN_LIST,
  ADD_FEV_COIN,
  REMOVE_FEV_COIN,
  FETCH_PRICE
} from './types'

import cc from 'cryptocompare'

export const setFirstVisit: any = () => ({
  type: SET_FIRST_VISIT,
  payload: !localStorage.getItem('cryptodash@fevCoinList')
})

export const setCoinList: any = coinList => ({
  type: SET_COIN_LIST,
  payload: coinList
})

export const addFevCoin: any = coin => ({
  type: ADD_FEV_COIN,
  payload: coin
})

export const removeFevCoin: any = coin => ({
  type: REMOVE_FEV_COIN,
  payload: coin
})

export const fetchPrice: any = coinList => {
  return dispatch => {
    Promise.all(coinList.map(coin => cc.priceFull(coin, 'USD')))
      .then(priceList => {
        dispatch({
          type: FETCH_PRICE,
          payload: priceList
        })
      })
      .catch(e => console.log(e.message))
  }
}
