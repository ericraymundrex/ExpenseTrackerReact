import './Chart.css'
import ChartBar from './ChartBar';


const Chart=(props)=>{
    const {datapoints}=props
    const dataPointValues=datapoints.map(datapoint=>datapoint.value);
    const totalMax=Math.max(...dataPointValues);

    return <div className='chart'>
        {datapoints.map((dataPoints,index) => 
            <ChartBar
                key={index}
                value={dataPoints.value} 
                maxValue={totalMax} 
                label={dataPoints.label} />)}
    </div>
}

export default Chart;