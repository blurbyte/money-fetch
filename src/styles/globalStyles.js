import { injectGlobal } from 'styled-components';

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

  input, textarea, button, select, label, a {
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
`;
