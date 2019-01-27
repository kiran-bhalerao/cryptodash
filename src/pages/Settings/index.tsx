import * as React from 'react'
import './Settings.scss'
import Welcome from '../../components/Welcome'
import { connect } from 'react-redux'
import * as actions from '../../redux/actions'
import CoinTile from '../../components/CoinTile'
import _ from 'lodash'
interface IProps {
  coin: any
}
interface IState {
  coinList: any
  inputText: string
}
class Settings extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)
    this.state = { coinList: [], inputText: '' }
  }
  static getDerivedStateFromProps(nProps, pState) {
    return {
      inputText: pState.inputText,
      coinList: Object.keys(nProps.coin.coinList).filter(coinKey => {
        return nProps.coin.coinList[coinKey].CoinName.toLowerCase().includes(
          pState.inputText
        )
      })
    }
  }
  handleChange = e => {
    const key = e.target.value
    this.setState({
      inputText: key
    })
  }
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
            {(this.props.coin.fevCoinList
              ? !!this.props.coin.fevCoinList.length
              : false) && (
              <React.Fragment>
                <div className='coin-container'>
                  {this.props.coin.fevCoinList.map(coinKey => (
                    <CoinTile key={coinKey} coinKey={coinKey} topSection />
                  ))}
                </div>
                <br />
              </React.Fragment>
            )}
            <Welcome msg='Confirm Favorites' page='Settings' />
            <div className='search-container'>
              <Welcome msg='Search Coins' page='normal' />
              <input
                type='text'
                value={this.state.inputText}
                onChange={this.handleChange}
              />
            </div>
            <div className='coin-container'>
              {this.state.coinList.slice(0, 50).map(coinKey => (
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
