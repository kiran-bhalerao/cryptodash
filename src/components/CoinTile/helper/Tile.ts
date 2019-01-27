import * as React from 'react'
import styled, { css } from 'styled-components'
import {
  subtleBoxShadow,
  lightBlueBackground,
  greenBoxShadow,
  redBoxShadow
} from '../../../Styles'

export const Tile = styled.div`
  ${subtleBoxShadow}
  ${lightBlueBackground}
  padding: 10px;
  display: flex;
  justify-content: space-between;
`

export const Selectable: any = styled(Tile)`
  &:hover {
    cursor: pointer;
    ${greenBoxShadow}

    ${(props: any) =>
      props.topSection &&
      css`
        ${redBoxShadow}
      `}
  }
  ${(props: any) =>
    props.isInFev &&
    !props.topSection &&
    css`
      pointer-events: none;
      opacity: 0.2;
    `}
`
export const Delatable = styled(Tile)`
  &:hover {
    cursor: pointer;
    ${redBoxShadow}
  }
`
