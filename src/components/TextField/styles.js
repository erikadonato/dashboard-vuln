import styled from 'styled-components';
import MTextField from '@mui/material/TextField';

export const StyledTextField = styled(MTextField)`
  & label.Mui-focused {
    color: #FFF;
  }

  & label:hover {
    color: #FFF;
  }

  & label {
    color: #FFFF;
  }

  & .MuiOutlinedInput-root {
    width: ${({width}) => width ? width : '15.625rem'};
    color: #FFFF;
    
    &.Mui-focused fieldset {
      border-color: #FFFF;
    }

    & fieldset {
      border-color: #FFFF;
    }

    &:hover fieldset {
      border-color: #FFFF;
    }
  }
`;
