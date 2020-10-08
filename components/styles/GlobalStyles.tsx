import { createGlobalStyle } from 'styled-components'

import { Theme } from './Theme'

const GlobalStyles = createGlobalStyle<{ theme: Theme }>`
  body,
  html {
    width: 100%;
    height: 100%;
    background: ${(props) => props.theme.bgColor};
    font-family: ${(props) => props.theme.fontMain};

    #__next {
      height: 100%;
      padding: 1.3em;
    }
  }

  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  /* Make clicks pass-through */
  #nprogress {
    pointer-events: none;
  }

  #nprogress .bar {
    background: ${(props) => props.theme.textPrimary};

    position: fixed;
    z-index: 100;
    top: 0;
    left: 0;
    width: 100%;
    height: 3px;
  }

  #nprogress .peg {
    display: block;
    position: absolute;
    right: 0px;
    width: 100px;
    height: 100%;
    box-shadow: 0 0 10px ${(props) => props.theme.textSecondary},
      0 0 5px ${(props) => props.theme.textSecondary};
    opacity: 1;

    -webkit-transform: rotate(3deg) translate(0px, -4px);
    -ms-transform: rotate(3deg) translate(0px, -4px);
    transform: rotate(3deg) translate(0px, -4px);
  }

  /* Remove these to get rid of the spinner */
  #nprogress .spinner {
    display: block;
    position: fixed;
    z-index: 100;
    top: 15px;
    right: 15px;
  }

  #nprogress .spinner-icon {
    width: 18px;
    height: 18px;
    box-sizing: border-box;

    border: solid 2px transparent;
    border-top-color: ${(props) => props.theme.textPrimary};
    border-left-color: ${(props) => props.theme.textPrimary};
    border-radius: 50%;

    -webkit-animation: nprogress-spinner 400ms linear infinite;
    animation: nprogress-spinner 400ms linear infinite;
  }

  @-webkit-keyframes nprogress-spinner {
    0% {
      -webkit-transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
    }
  }
  @keyframes nprogress-spinner {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`

// color: ${(props) => props.theme.textPrimary};
export default GlobalStyles
