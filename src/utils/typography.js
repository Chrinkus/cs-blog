import Typography from 'typography';
import kirkhamTheme from 'typography-theme-kirkham';

kirkhamTheme.googleFonts[1].name = 'Open Sans';
kirkhamTheme.bodyFontFamily[0] = 'Open Sans';
//kirkhamTheme.baseFontSize = '16px';
//kirkhamTheme.scaleRatio = 2.3;

const typography = new Typography(kirkhamTheme);

export default typography;