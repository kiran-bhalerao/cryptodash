import * as React from 'react'
import './AppBar.scss'
import ControlButton from './ControlButton'

export default () => (
  <div className='app-bar'>
    <div className='app-bar-right'>CryptoDash</div>
    <div className='app-bar-left'>
      <ControlButton name='Dashboard' link='/' />
      <ControlButton name='Settings' link='/settings' />
    </div>
  </div>
)
