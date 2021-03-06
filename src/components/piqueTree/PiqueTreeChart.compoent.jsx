import React from 'react';
import Chart from 'react-google-charts';
import CustomButton from '../customButton/CustomButtom.component'
import { ButtonGroupContainer } from './PiqueTreeChart.styles.js'

const PiqueChart = ({data, width, height, options, chartType, rootProps, showButton}) => {
    const [chartEditor, setChartEditorState] = React.useState(null);
    const [chartWrapper, setChartWrapperState] = React.useState(null);
    const [google, setGoogle] = React.useState(null);
    
    return (
        <div>
            {showButton ? 
            <button onClick={() => {
                if (
                chartWrapper === null ||
                google === null ||
                chartEditor === null
                ){
                    return
                }
                chartEditor.openDialog(chartWrapper)
                google.visualization.events.addListener(chartEditor, 'ok', () => {
                const newChartWrapper = chartEditor.getChartWrapper()
                newChartWrapper.draw()
                const newChartOptions = newChartWrapper.getOptions()
                const newChartType = newChartWrapper.getChartType()
                console.log('Chart type changed to ', newChartType)
                console.log('Chart options changed to ', newChartOptions)
                })
            }}>
            Edit Data
            </button> : null}
            <Chart
                width={width}
                height={height}
                chartType={chartType}
                loader={<div>Loading Chart</div>}
                data={data}
                options={options}

                rootProps={rootProps}
                getChartEditor={({ chartEditor, chartWrapper, google }) => {
                    setChartEditorState(chartEditor)
                    setChartWrapperState(chartWrapper)
                    setGoogle(google)
                }}
                chartPackages={['corechart', 'controls', 'charteditor']}
            />
            </div>
    )
       
       
      
}

export default PiqueChart;