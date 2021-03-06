import { Radar, RadarChart, PolarGrid, PolarAngleAxis } from 'recharts';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import ApiProvider from '../../Api/ApiProvider';
import PropTypes from 'prop-types'

function PerformanceChart( { id } ) {

    let [ data, setData ] = useState()

    useEffect(() => {
        new ApiProvider().getUserPerformance(id)
            .then( res => setData(res.data.data.data))
    }, [id])

    function FormatPolarAngleAxis(value) {
        if (value === 1 ) return 'Cardio'
        if (value === 2 ) return 'Energy'
        if (value === 3 ) return 'Endurance'
        if (value === 4 ) return 'Strength'
        if (value === 5 ) return 'Speed'
        if (value === 6 ) return 'Intensity'
    }
    return (
        <RadarChartContainer>
            <RadarChart outerRadius={80} width={250} height={250} data={data}>
                <PolarGrid radialLines={false} />
                <PolarAngleAxis  dataKey="kind" tick={{fill: "white", fontSize: "10px", fontWeight: '500'}} tickSize={0} tickFormatter={FormatPolarAngleAxis}/>
                <Radar  dataKey='value' fill="#FF0101" fillOpacity={0.6} />
            </RadarChart>
        </RadarChartContainer>
    )
}

export default PerformanceChart

PerformanceChart.propTypes = {
    id : PropTypes.number.isRequired
}
const RadarChartContainer = styled.div`
    width: 258px;
    height: 263px;
    display:flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    background-color: #282D30;`
