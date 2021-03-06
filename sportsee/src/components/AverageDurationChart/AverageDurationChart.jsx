import { useState, useEffect } from 'react'
import ApiProvider from '../../Api/ApiProvider'
import { LineChart, XAxis, YAxis, Tooltip, Line} from 'recharts'
import { ChartContainer, ChartTitle } from './AverageDurationChartStyle'
import PropTypes from "prop-types"

function AverageDurationChart( { id }) {

    let [ data, setData ] = useState()
    useEffect(() => {
        new ApiProvider().getUserAverageSessionData(id)
            .then( res => setData(res.data.data.sessions))
    }, [id])

    function formatXAxis(value){ // Définir chaque jour comme un jour de la semaine
        if (value === 1) return "L"
        if (value === 2) return "M"
        if (value === 3) return "M"
        if (value === 4) return "J"
        if (value === 5) return "V"
        if (value === 6) return "S"
        if (value === 7) return "D"
        return value
    }
    return (
        <ChartContainer>
            <ChartTitle>Durée moyenne des sessions</ChartTitle>
            <LineChart width={270} height={263} data={data} >
                <XAxis dataKey="day" interval={0} tick={{fill : 'white', fontSize: 12, fontWeight: 500, dx: 20}} stroke="none" tickFormatter={formatXAxis}  />
                <YAxis dataKey="sessionLength" hide domain={['dataMin -10', 'dataMax + 20']}/>
                <Tooltip content={<CustomPayloadAverage />} cursor={false} />
                <Line type="natural" dataKey="sessionLength" stroke="white" strokeWidth={2} dot={false} activeDot={{stroke: "rgba(255,255,255, 0.5)",strokeWidth: 10,r: 5,}}/>
            </LineChart>
        </ChartContainer>
    )
}

AverageDurationChart.propTypes = {
    id : PropTypes.number.isRequired
}

function CustomPayloadAverage( { payload, active }) { // CustomTootltip 
    if ( active && payload) {
        return <p style={{width : "39px", height: "25px", textAlign: "center", lineHeight: "24px", backgroundColor: "white", fontSize: "10px", borderRadius: "2px"}}>{`${payload[0].value} min`}</p>
    } return null
}

CustomPayloadAverage.propTypes = {
    payload : PropTypes.array,
    active : PropTypes.bool
}
export default AverageDurationChart