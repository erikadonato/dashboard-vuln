import styled from 'styled-components';

import MTypography from '@mui/material/Typography';

export const Typography = styled(MTypography)`
color: #fff;

@media screen and (max-width: 900px){
    font-size: ${props => props.variant === "h5" ||  props.variant === "h4" ? "1.5rem !important" : "1rem !important"};
}
`;