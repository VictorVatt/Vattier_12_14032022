import { useEffect, useState } from 'react'
import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Bar, } from 'recharts'
import ApiProvider from '../../Api/ApiProvider.js'
import { BarChartContainer, LegendContainer, LegendItemsContainer, LegendItemContainer, RedDot, BlackDot, LegendTitle } from './ActivityChartStyle'


function ActivityChart( {id} ) {
    let [ data, setData ] = useState()
    
    useEffect(() => {
        new ApiProvider().getUserActivityData(id)
            .then( res => setData(res.data.data.sessions))
    }, [id])

    return (
        
        <BarChartContainer>
            <LegendBarChart />
            <BarChart width={702} height={200} data={data}>
                <CartesianGrid strokeDasharray="1 3" vertical={false}/>
                <XAxis tickLine={false} tickSize={15} tick={{fill: "#9B9EAC", fontSize: "14px", fontWeight: '500'}}/>
                <YAxis tick={{fill: "#9B9EAC",fontSize: "14px", fontWeight: '500'}} stroke="none" dataKey={"kilogram"} orientation='right' yAxisId="kilogram" domain={['dataMin -1', 'dataMax + 1']} allowDecimals={false} />
                <YAxis stroke="none" dataKey={"calories"} yAxisId='calories' domain={['dataMin-100', 'dataMax+100']}/>
                <Tooltip content={< CustomTooltip />}/>
                <Bar dataKey="calories" fill="#E60000" barSize={5} radius={[5, 5, 0, 0]} yAxisId="calories"/>
                <Bar dataKey="kilogram" fill="#282D30" barSize={5}  radius={[5, 5, 0, 0]} yAxisId="kilogram"/>
         </BarChart>
        </BarChartContainer>
    )
}

function LegendBarChart() {

    return (
        <LegendContainer>
            <LegendTitle>Activité quotidienne</LegendTitle>
            <LegendItemsContainer>
                <LegendItemContainer>
                    <BlackDot></BlackDot>
                    <p>Poids (kg)</p>
                </LegendItemContainer>
                <LegendItemContainer>
                    <RedDot></RedDot>
                    <p>Calories brûlées (kCal)</p>
                </LegendItemContainer>
            </LegendItemsContainer>
        </LegendContainer>
    )
}

function CustomTooltip( { payload, active }) {
        if ( active && payload) {
            return (
                <div style={{color : "#fff", fontSize: "0.8rem", fontWeight: '700', margin: '0', padding: "1rem"}}>
                    <p style={{color : "#fff", fontSize: "0.8rem", fontWeight: '700', margin: '0', padding: "1rem", backgroundColor: '#e60000'}}>
                        {`${payload[0].value} kCal`}
                    </p>
                    <p style={{color : "#fff", fontSize: "0.8rem", fontWeight: '700', margin: '0', padding: "1rem", backgroundColor: '#000'}}>
                        {`${payload[1].value} kg`}
                    </p>
                </div>
            )
        } return null
    }


export default ActivityChart