import * as React from 'react'
import { Selectable } from './helper/Tile'
import { connect } from 'react-redux'
import * as actions from '../../redux/actions'
interface IProps {
  coin?: any
  coinKey?: any
  topSection?: any
  removeFevCoin?: any
  addFevCoin?: any
}
class CoinTile extends React.Component<IProps, object> {
  render() {
    const coin = this.props.coin.coinList[this.props.coinKey]
    const props = this.props
    return (
      <Selectable
        topSection={props.topSection}
        onClick={() => {
          this.props.topSection
            ? props.removeFevCoin(props.coinKey)
            : props.addFevCoin(props.coinKey)
        }}
        isInFev={
          props.coin.fevCoinList
            ? props.coin.fevCoinList.includes(props.coinKey)
            : false
        }
      >
        <div>{coin.CoinName}</div>
        <img
          style={{ height: '50px', width: '50px' }}
          alt={coin.CoinSymbol}
          src={`http://cryptocompare.com/${coin.ImageUrl}`}
        />
      </Selectable>
    )
  }
}

const mapStatToProps = state => {
  return {
    ...state
  }
}

export default connect(
  mapStatToProps,
  actions
)(CoinTile)
