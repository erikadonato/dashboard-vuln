import styled from 'styled-components'

export const Nav = styled.nav`
    width: auto;
    display: flex;
    justify-content: center;
`
export const Ul = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: row;
`
export const Li = styled.li`
    padding: 0.6rem;
    border-radius: 10px;
    margin: 0 0.3rem;
    cursor: pointer;
    background: #FF5959;
    color: #FFF;

    &:hover {
        transform: translate3d(1px, -2px, 0);
        font-weight: bold;
    }
`

export const NumberOfPage = styled.span`

`