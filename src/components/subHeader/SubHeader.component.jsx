import React from 'react';
import PiqueChart from '../piqueTree/PiqueTreeChart.compoent'
import * as s from './SubHeader.styles'

const SubHeader = ({blockHeight, width, height, options, chartType, rootProps, data}) => {
    return(
        <s.MainHeaderContainer blockHeight={blockHeight}>
            <PiqueChart width={width} height={height} data={data} options={options} chartType={chartType} rootProps={rootProps}/>
        </s.MainHeaderContainer>
    )
}

export default SubHeader;