import * as React from 'react'
import './Settings.scss'
import Welcome from '../../components/Welcome'
import { connect } from 'react-redux'
import * as actions from '../../redux/actions'
import CoinTile from '../../components/CoinTile'

interface IProps {
  coin: any
}
class Settings extends React.Component<IProps> {
  render() {
    return (
      <div className='main'>
        {!Object.keys(this.props.coin.coinList).length ? (
          <div className='loading'>Loading coins..</div>
        ) : (
          <React.Fragment>
            <Welcome
              msg='Welcome to Cryptodash, select your coin to begin.'
              page='normal'
            />
            <Welcome msg='Confirm Favorites' page='Settings' />
            <div className='coin-container'>
              {Object.keys(this.props.coin.coinList)
                .slice(0, 40)
                .map(coinKey => (
                  <CoinTile key={coinKey} coinKey={coinKey} />
                ))}
            </div>
          </React.Fragment>
        )}
      </div>
    )
  }
}

const mapStateToProps = (state: any) => {
  return {
    ...state
  }
}
export default connect(
  mapStateToProps,
  actions
)(Settings)
