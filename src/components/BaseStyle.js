import { createGlobalStyle } from 'styled-components';
import { SETTINGS } from '../settings';

const styleSettings = SETTINGS.style;

const BaseStyle = createGlobalStyle`
    body {
        width: 100%;
        height: 100%;
        font-family: ${styleSettings.fonts.roboto};
        background-color: ${styleSettings.colors.light};
    }

    :root {
        font-size: 10px;
    }
`;

export default BaseStyle;