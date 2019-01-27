const theme = 'dark'
// const theme = 'light';
export const lightTheme = false

export const color = lightTheme ? 'white' : '#061a44'
export const color2 = lightTheme ? 'white' : '#010e2c'
export const color3 = lightTheme ? '#09f010' : '#42ff3a'

if (lightTheme) {
  document.body.style.background = '#e1eaee'
  document.body.style.color = '#061a44'
}

export const lightBlueBackground = `background-color: ${color}`
export const backgroundColor2 = `background-color: ${color2};`
export const greenBackgroundColor = `background-color: ${color3};`

export const fontColorGreen = `#03A9F4`
export const fontColorWhite = `white`
export const subtleBoxShadow = `box-shadow: 0px 0px 5px 1px ${
  lightTheme ? '#a9b6ff' : '#121d5b'
}`
export const greenBoxShadow = `box-shadow: 0px 0px 4px 2px #5fff17`
export const redBoxShadow = `box-shadow: 0px 0px 2px 2px #e41111`

export const fontSizeBig = '2rem'
export const fontSize1 = '1.5rem;'
export const fontSize2 = '1.0rem'
export const fontSize3 = '.75rem'

export const textAlignCenter = 'center;'
