import styled from 'styled-components';

const withStyles = (component, styles) => {
  console.log('component', component);
  console.log('styles', styles);
  return styled(component)`
    ${styles}
  `;
};

export default withStyles;
