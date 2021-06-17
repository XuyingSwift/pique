import styled from 'styled-components';

export const DashboardGrid = styled.div`
    grid-area: mainview;
`

export const ChartGroupWrapper = styled.div`
    column-count: 2;
    column-gap: 20px;
    margin: 10px;
    
`
export const Group = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    background-color: #d3d6de;
    margin-bottom: 10px;
    -webkit-column-break-inside: avoid;
    padding: 20px;
    box-sizing: border-box;
    
`