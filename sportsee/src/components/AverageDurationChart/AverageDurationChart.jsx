import { LineChart, XAxis, YAxis, Tooltip, Line} from 'recharts'
import { ChartContainer } from './AverageDurationChartStyle'
function AverageDurationChart( { data }) {

    return (
        <ChartContainer>
            <LineChart width={258} height={263} data={data} >
                <XAxis dataKey="day" tick={{fill : 'white', fontSize: 12, fontWeight: 500,}} stroke="none" />
                <YAxis dataKey="sessionLength" hide domain={['dataMin -10', 'dataMax + 10']}/>
                <Tooltip  contentStyle={{
                width: '39px', 
                height: "25px", 
                backgroundColor: "white", 
                padding: '0'}} 
                itemStyle={{display: "none"}}/>
                <Line type="natural" dataKey="sessionLength" stroke="white" strokeWidth={2} dot={false} activeDot={{stroke: "rgba(255,255,255, 0.5)",strokeWidth: 10,r: 5,}}/>
            </LineChart>
        </ChartContainer>
    )
}

export default AverageDurationChart