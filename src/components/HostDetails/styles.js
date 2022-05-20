import styled from 'styled-components'

export const ContainerHost = styled.div`
    border-bottom: 3px solid #bbb504; 
    border-right: 3px solid #bbb504; 
    border-top: 1px solid #bbb504;
    border-left: 1px solid #bbb504;  
    border-radius: 10px;
    padding: 0.7rem;
    margin: 0.5rem;
    min-height: 10vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    transition: all 0.5 ease;
    
    &:hover {
        transform: translate3d(2px, -2px, 0);
        transition-delay: 0s;
        transition-duration: 0.4s;
        transition-property: all;
       transition-timing-function: line;
    }
`

export const HeaderHost = styled.div`
    cursor: pointer;
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    font-size: 1.2rem;
`

export const TitleHost = styled.div`
    margin-right: auto;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis; 
    color: #FFF;
    text-align: left;
    max-width: ${props => props.large ? "20rem" : props.medium? "15rem" : "10rem"};
    min-width: ${props => props.large ? "20rem" : props.medium? "15rem" : "8rem"};

    &:hover {
        overflow: visible
    }
`
export const DateHost = styled.div`
    margin-right: 4rem;
    width: 18rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`
export const Options = styled.div`
    font-size: 1.7rem;
    width: 7rem;
    display: flex;
    justify-content: space-between;
`

export const ContainerTable = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin: 1rem auto 0.2rem auto;
    color: #fff;

    table {
        width: 100%;
    }

    th, h1 {
        padding: 0.2rem;
        font-weight: normal;
        font-size: 1em;
        text-align: center;
        color: #FFF;
    }

    td {
        font-weight: normal;
        font-size: 0.9em;
        -webkit-box-shadow: 0 2px 2px -2px #0E1119;
        -moz-box-shadow: 0 2px 2px -2px #0E1119;
        box-shadow: 0 2px 2px -2px #0E1119;
    }
    
    tr:nth-child(odd) {
        background-color: #323C50;
    }

    tr:nth-child(even) {
       background-color: #2C3446;
    }

    td:first-child { color: #FB667A; padding: 0.2%}

    tr:hover {
        color: #fff;
        font-weight: bold;
        /* box-shadow: #5246f8 */
        box-shadow: #026e61 -1px 1px, #026e61 -1px 1px, #026e61 -2px 2px, #026e61 -2px 2px, #026e61 -3px 3px, #026e61 -3px 3px;
        transform: translate3d(1px, -1px, 0);
        transition-delay: 0s;
        transition-duration: 0.4s;
        transition-property: all;
        transition-timing-function: line;
    }

    td:hover {
        background-color: #04bba5;
        color: #fff;
        font-weight: bolder;
        text-shadow: 0.15em 0.15em 0.20em black;


        box-shadow: #026e61 -1px 1px, #026e61 -1px 1px, #026e61 -2px 2px, #026e61 -2px 2px, #026e61 -3px 3px, #026e61 -3px 3px;
        transform: translate3d(1px, -1px, 0);

        transition-delay: 0s;
        transition-duration: 0.4s;
        transition-property: all;
        transition-timing-function: line;
    }




`