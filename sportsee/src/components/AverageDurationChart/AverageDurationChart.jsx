import { LineChart, XAxis, YAxis, Tooltip, Line} from 'recharts'
import { ChartContainer } from './AverageDurationChartStyle'
function AverageDurationChart( { data }) {

    return (
        <ChartContainer>
            <LineChart width={258} height={263} data={data} >
                <XAxis dataKey="day" tick={{fill: "white"}} stroke="none" />
                <YAxis dataKey="sessionLength" hide domain={['dataMin -10', 'dataMax + 10']}/>
                <Tooltip />
                <Line type="natural" dataKey="sessionLength" stroke="white" strokeWidth={2} dot={false} />
            </LineChart>
        </ChartContainer>
    )
}

export default AverageDurationChart