import * as React from 'react'
import { Selectable } from './helper/Tile'
import { connect } from 'react-redux'

interface IProps {
  coin?: any
  coinKey?: any
}
class CoinTile extends React.Component<IProps, object> {
  render() {
    const coin = this.props.coin.coinList[this.props.coinKey]
    return (
      <Selectable>
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

export default connect(mapStatToProps)(CoinTile)
