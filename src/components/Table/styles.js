import styled from "styled-components";

export const TableContainer = styled.div`

`

export const Table = styled.table`
    width: 800px;
    border-collapse: collapse;
    overflow: hidden;
    box-shadow: 0 0 20px rgba(0,0,0,0.1);
    @media screen and (max-width: 580px){
        display: block;
    }
`

export const Td = styled.td`
    padding: 15px;
    background-color: rgba(71, 71, 71, 0.8);
    color: white;
`

export const Th = styled.th`
    padding: 15px;
    background-color: rgba(71, 71, 71, 0.8);
    color: white;
    text-align: left;
`
export const Tbody = styled.tbody`
 tr {
    &:hover {
      background-color: rgba(255,255,255,0.3);
    }
  }
  td {
    position: relative;
    &:hover {
      &:before {
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        top: -9999px;
        bottom: -9999px;
        background-color: rgba(255,255,255,0.3);
        z-index: -1;
      }
    }
  }
`
export const Thead = styled.thead`
`
export const Tr = styled.tr`
    background-color: #000;
`