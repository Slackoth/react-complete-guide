import './Chart.css';
import React from 'react';
import ChartBar from './ChartBar/ChartBar';

const Chart = props => {
    const calculateMaxValue = () => {
        const values = props.dataPoints.map(dataPoint => dataPoint.value);
        
        return Math.max(...values);
    };
    
    const toChartBar = () => {
        return props.dataPoints.map(dataPoint => {
            return <ChartBar key={dataPoint.label} value={dataPoint.value} 
                maxValue={calculateMaxValue()} label={dataPoint.label}/>;
        });
    };

    return (<div className='chart'>
        {toChartBar()}
    </div>);
};

export default Chart;