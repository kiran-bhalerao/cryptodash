import * as React from 'react'
import './ControlButton.scss'
import { NavLink } from 'react-router-dom'

interface IProps {
  name?: string
  link?: any
}

class ControlButton extends React.Component<IProps, object> {
  render() {
    return (
      <NavLink
        exact
        to={this.props.link}
        className='app-bar-item'
        activeClassName='active-app-bar'
      >
        {this.props.name}
      </NavLink>
    )
  }
}

export default ControlButton
