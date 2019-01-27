import * as React from 'react'
import './Dashboard.scss'
import Welcome from '../../components/Welcome'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import * as actions from '../../redux/actions'

interface IProps {
  setFirstVisit: any
  nav: any
}
class Dashboard extends React.Component<IProps, object> {
  componentWillMount = () => {
    this.props.setFirstVisit()
  }
  render() {
    return <div className='main'>
        {this.props.nav.isFirst && <Redirect from='/' to='settings' />}
        <Welcome msg='welcome to Dashboard' page='normal' />
      </div>
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
