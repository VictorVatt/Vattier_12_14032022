import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar, } from 'recharts'
import styled from 'styled-components'

function ActivityChart( {data} ) {

    return (
        <BarChartContainer>
            <BarChart width={702} height={200} data={data}>
                <CartesianGrid strokeDasharray="1 3" />
                <XAxis />
                <YAxis tick={{fill: "#9B9EAC"}} stroke="none" dataKey={"kilogram"} orientation='right' yAxisId="kilogram" domain={['dataMin - 1', 'dataMax +1']}/>
                <YAxis  stroke="none" dataKey={"calories"} yAxisId='calories' />
                <Tooltip />
                <Legend />
                <Bar dataKey="calories" fill="#E60000" barSize={5} radius={[5, 5, 0, 0]} yAxisId="calories"/>
                <Bar dataKey="kilogram" fill="#282D30" barSize={5}  radius={[5, 5, 0, 0]} yAxisId="kilogram"/>
         </BarChart>


        </BarChartContainer>
    )
}

const BarChartContainer = styled.div`
    width: 835px;
    height: 320px;
    display:flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    background-color: #FBFBFB;`
export default ActivityChart