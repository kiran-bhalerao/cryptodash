import * as React from 'react'
import styled from 'styled-components'
import {
  subtleBoxShadow,
  lightBlueBackground,
  greenBoxShadow
} from '../../../Styles'

export const Tile = styled.div`
  ${subtleBoxShadow}
  ${lightBlueBackground}
  padding: 10px;
  display: flex;
  justify-content: space-between;
`

export const Selectable = styled(Tile)`
  &:hover {
    cursor: pointer;
    ${greenBoxShadow}
  }
`
