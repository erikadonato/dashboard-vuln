import styled from 'styled-components';

import MButton from '@mui/material/Button';

export const StyledButton = styled(MButton)`
  &.MuiButton-root {
    width: ${({width}) => width ? width : '15.625rem'};
    background-color: #FF0000;
    color: #FFFFFF;
  }
  &.MuiButton-root:hover {
    background-color: #FF1200;
    color: #FFFFFF;
  }
`;
