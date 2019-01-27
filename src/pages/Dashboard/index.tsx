import * as React from 'react'
import './Dashboard.scss'
import Welcome from '../../components/Welcome'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import * as actions from '../../redux/actions'

interface IProps {
  setFirstVisit: any
  nav: any
  coin: any
  fetchPrice: any
}
class Dashboard extends React.Component<IProps, object> {
  componentWillMount = () => {
    this.props.setFirstVisit()
  }
  componentDidMount = () => {
    this.props.fetchPrice(this.props.coin.fevCoinList)
  }
  render() {
    console.log(this.props.coin.priceList)
    return (
      <div className='main'>
        {this.props.nav.isFirst && <Redirect from='/' to='settings' />}
        {(this.props.coin.priceList ? (
          !!this.props.coin.priceList.length
        ) : (
          false
        )) ? (
          <Welcome msg='welcome to Dashboard' page='normal' />
        ) : (
          <div className='loading'>Loading coins..</div>
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
)(Dashboard)
