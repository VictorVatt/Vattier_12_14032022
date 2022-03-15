import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Legend } from 'recharts';
import styled from 'styled-components';

function PerformanceChart( { data } ) {

    return (
        <RadarChartContainer>
            <RadarChart outerRadius={80} width={600} height={250} data={data.data}>
                <PolarGrid />
                <PolarAngleAxis  dataKey="kind" tick={{fill: "white", fontSize: "12px"}} tickSize={10}/>
                <Radar  dataKey='value' fill="#FF0101" fillOpacity={0.6} />
            </RadarChart>
        </RadarChartContainer>
    )
}

export default PerformanceChart

const RadarChartContainer = styled.div`
    width: 258px;
    height: 263px;
    display:flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    background-color: #282D30;`