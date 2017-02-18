import { injectGlobal } from 'styled-components';
import media from './media';

import OpenSansLight from '../fonts/OpenSans-Light.woff2';
import OpenSansBold from '../fonts/OpenSans-Bold.woff2';

injectGlobal`
  @font-face {
    font-family: 'OpenSans Light';
    src:  url('${OpenSansLight}') format('woff2');
  }

  @font-face {
    font-family: 'OpenSans Bold';
    src:  url('${OpenSansBold}') format('woff2');
  }

  html, body {
      width: 100%;
      height: 100%;
    }

  html {
    font-size: 10px;
    font-family: sans-serif;
    box-sizing: border-box;
    line-height: 1.4;
  }

  body {
    background: #fff;
    overflow-y: scroll;
    font-family: Arial, Helvetica, sans-serif;
    /* text selection disabled */
    -webkit-touch-callout: none;
    -webkit-user-select: none;
       -moz-user-select: none;
        -ms-user-select: none;
            user-select: none;
  }

  input, textarea, button, select, label, a, li {
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    outline: none;
  }

  a {
    text-decoration: none;
  }

  p {
    font-size: 1.4rem;
    color: #444;
    line-height: 1.4;
    margin: 0.8rem 0;
  }

  /* AnimatedList component css-transition classes */
  .animated-list-enter {
    opacity: 0;
  }

  .animated-list-enter.animated-list-enter-active {
    opacity: 1;
    transition: opacity 0.4s ease-out;
  }

  .animated-list-leave {
    opacity: 1;
  }

  .animated-list-leave.animated-list-leave-active {
    opacity: 0;
    ${media.phone`height: 0;`}
    transition: all 0.3s ease-out;
  }
`;
