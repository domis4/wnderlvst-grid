import styled from 'styled-components'

const isDefined = value => value != null

const defaultSettings = {
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  spacing: 8
}

const StyledResponsiveGrid = styled.div`
  * {
    box-sizing: border-box;
  }

  .container {
    display: flex;
    justify-content: center;
    padding: ${({ spacing }) => isDefined(spacing) ? spacing : defaultSettings.spacing}px;
  }

  .row {
    width: 100%;
    display: block;
    clear: both;
    margin-left: -5px;
    margin-right: 5px;
    margin-top: -5px;
    margin-bottom: 5px;
  }

  .centered {
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
  }


  .col-xs-1,
  .col-xs-2,
  .col-xs-3,
  .col-xs-4,
  .col-xs-5,
  .col-xs-6,
  .col-xs-7,
  .col-xs-8,
  .col-xs-9,
  .col-xs-10,
  .col-xs-11,
  .col-xs-12 {
    box-sizing: border-box;
    display: inline-block;
    zoom: 1;
    letter-spacing: normal;
    word-spacing: normal;
    vertical-align: top;
    text-rendering: auto;
    padding: ${({ spacing }) => isDefined(spacing) ? spacing * 2 : defaultSettings.spacing * 2}px;
  }

  .hidden-xs {
    display: none;
  }
  .visible-xs {
    display: block;
  }

  .col-xs-1 {
    width: 8.33%;
  }

  .col-xs-2 {
    width: 16.66%;
  }

  .col-xs-3 {
    width: 25%;
  }

  .col-xs-4 {
    width: 33.33%;
  }

  .col-xs-5 {
    width: 41.66%;
  }

  .col-xs-6 {
    width: 50%;
  }

  .col-xs-7 {
    width: 58.33%;
  }

  .col-xs-8 {
    width: 66.66%;
  }

  .col-xs-9 {
    width: 75%;
  }

  .col-xs-10 {
    width: 83.33%;
  }

  .col-xs-11 {
    width: 91.66%;
  }

  .col-xs-12 {
    width: 100%;
  }
}

@media all and (min-width: ${({ sm }) => isDefined(sm) ? sm : defaultSettings.sm}}px) {
  .col-sm-1,
  .col-sm-2,
  .col-sm-3,
  .col-sm-4,
  .col-sm-5,
  .col-sm-6,
  .col-sm-7,
  .col-sm-8,
  .col-sm-9,
  .col-sm-10,
  .col-sm-11,
  .col-sm-12 {
    box-sizing: border-box;
    display: inline-block;
    zoom: 1;
    letter-spacing: normal;
    word-spacing: normal;
    vertical-align: top;
    text-rendering: auto;
    padding: ${({ spacing }) => isDefined(spacing) ? spacing * 2 : defaultSettings.spacing * 2}}px;
  }

  .hidden-sm {
    display: none;
  }
  .visible-sm {
    display: block;
  }
}

@media all and (min-width: ${({ md }) => isDefined(md) ? md : defaultSettings.md}}px) {
  .col-md-1,
  .col-md-2,
  .col-md-3,
  .col-md-4,
  .col-md-5,
  .col-md-6,
  .col-md-7,
  .col-md-8,
  .col-md-9,
  .col-md-10,
  .col-md-11,
  .col-md-12 {
    box-sizing: border-box;
    display: inline-block;
    zoom: 1;
    letter-spacing: normal;
    word-spacing: normal;
    vertical-align: top;
    text-rendering: auto;
    padding: ${({ spacing }) => isDefined(spacing) ? spacing * 2 : defaultSettings.spacing * 2}}px;
  }

  .hidden-md {
    display: none;
  }
  .visible-md {
    display: block;
  }
}

@media all and (min-width: ${({ lg }) => isDefined(lg) ? lg : defaultSettings.lg}}px) {
  .col-lg-1,
  .col-lg-2,
  .col-lg-3,
  .col-lg-4,
  .col-lg-5,
  .col-lg-6,
  .col-lg-7,
  .col-lg-8,
  .col-lg-9,
  .col-lg-10,
  .col-lg-11,
  .col-lg-12 {
    box-sizing: border-box;
    display: inline-block;
    zoom: 1;
    letter-spacing: normal;
    word-spacing: normal;
    vertical-align: top;
    text-rendering: auto;
    padding: padding: ${({ spacing }) => isDefined(spacing) ? spacing * 2 : defaultSettings.spacing * 2}}px;px;
  }
  
  .hidden-lg {
    display: none;
  }
  .visible-lg {
    display: block;
  }
`
export default StyledResponsiveGrid
