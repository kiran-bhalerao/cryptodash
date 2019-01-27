import * as React from 'react'
import Dashboard from './pages/Dashboard'
import AppBar from './components/AppBar'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Settings from './pages/Settings'
import cryptocompare from 'cryptocompare'
import { connect } from 'react-redux'
import * as actions from './redux/actions'
import './global.scss'

interface IProps {
  setCoinList: any
}

class App extends React.Component<IProps, object> {
  componentWillMount = async () => {
    const list = await cryptocompare.coinList()
    this.props.setCoinList(list.Data)
  }
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <AppBar />
          <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route exact path='/settings' component={Settings} />
          </Switch>
        </React.Fragment>
      </BrowserRouter>
    )
  }
}

export default connect(
  null,
  actions
)(App)
