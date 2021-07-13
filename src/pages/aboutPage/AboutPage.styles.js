import styled from 'styled-components';

export const AboutGrid = styled.div`
    grid-area: mainview;
`

export const Persons= styled.div`
    display: grid;
    grid-template-rows: repeat(5, 150px);
    grid-template-areas:
    "Clem"
    "Derek"
    "Andrew"
    "Payton"
    "Xuying";
    height: 100vh;
`

export const Clem = styled.div`
    grid-area: Clem;
    
`

export const Derek = styled.div`
    grid-area: Derek;
`

export const Andrew = styled.div`
    grid-area: Andrew;
    background-color: #B9B7BD;

    
`

export const Payton = styled.div`
    grid-area: Payton;
   
`

export const Xuying= styled.div`
    grid-area: Xuying;
    background-color: #B9B7BD;
`
