import { createGlobalStyle } from 'styled-components';

import OfficinaSans from './ITC-Officina-Sans-Std-Book-Font.otf';

export default createGlobalStyle`
    @font-face {
        font-family: 'Officina Sans Bold';
        src: local('Officina Sans Bold'), local('OfficinaSansBold'),
        url(${OfficinaSans}) format('otf');
        font-weight: 300;
        font-style: normal;
    }
`;