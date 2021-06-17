import React from 'react';
import PiqueChart from '../piqueTree/PiqueTreeChart.compoent'
import * as s from './Chart.styles';

const Chart= ({width, height, data, options, chartType, showButton}) => {
    return (
        <s.Container>
            <PiqueChart
                width={width} 
                height={height} 
                data={data} 
                options={options} 
                chartType={chartType}
                showButton={showButton}
            />
        </s.Container>
    )
}
export default Chart;