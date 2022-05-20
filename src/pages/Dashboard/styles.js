import styled from 'styled-components'

export const CardSpace = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background: #ebedf0;
    border-radius: 15px;
    padding: 2%;

    @media screen and (max-width: 900px){
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        padding: 2% 0;
    }
`

export const GraphicsArea = styled.div`
    margin-top: 1rem;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    background: #ebedf0;
    border-radius: 15px;
    padding: 4% 2% 2% 2%;
    min-height: 70vh;

    @media screen and (max-width: 900px){
        flex-direction: column;
        align-items: center;
        padding: 2% 0;
    }
`

export const GraphicArea = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 44%;
    @media screen and (max-width: 900px){
        align-items: center;
        padding: 2% 0;
    }
`

export const GraphicTitle = styled.div`
    background: #f9b35d;
    text-align: center;
    color: #FFF;
    border-radius: 15px;
    font-size: 1.2rem;
    padding: 2%;
    width: 80%;
`