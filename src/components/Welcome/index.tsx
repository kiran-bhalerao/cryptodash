import * as React from 'react'
import './Welcome.scss'
import { connect } from 'react-redux'
import * as actions from '../../redux/actions'
import { Redirect } from 'react-router-dom'
import { color3, fontSizeBig } from '../../Styles'

interface IState {
  isFev: boolean
}

interface IProps {
  msg: string
  page?: string
  setFirstVisit?: any
  nav?: any
  coin?: any
}
class Welcome extends React.Component<IProps, IState> {
  state = {
    isFev: false
  }

  componentWillMount = () => {
    this.props.setFirstVisit()
  }

  handleFev = () => {
    localStorage.setItem(
      'cryptodash@fevCoinList',
      JSON.stringify(this.props.coin.fevCoinList)
    )
    this.props.setFirstVisit()
    this.setState({
      isFev: true
    })
  }
  render() {
    const props = this.props
    return (
      <div>
        {props.page == 'normal' && <p className='welcome'>{props.msg}</p>}
        {props.page == 'Settings' && (
          <div className='fav-container'>
            <p
              className='fav'
              onClick={this.handleFev}
              style={{ color: color3, fontSize: fontSizeBig }}
            >
              {props.msg}
            </p>
          </div>
        )}
        {props.page == 'big' && (
          <div className='fav-container'>
            <p style={{ color: color3, fontSize: fontSizeBig }}>{props.msg}</p>
          </div>
        )}
        {this.state.isFev && <Redirect from='/settings' to='/' />}
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
)(Welcome)
