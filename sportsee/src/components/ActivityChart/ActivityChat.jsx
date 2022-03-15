import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar, } from 'recharts'
import { colors } from '../../styles/colors'

function ActivityChart( {data} ) {
    return (
        <BarChart width={702} height={200} data={data}>
            <CartesianGrid strokeDasharray="1 3" />
            <XAxis />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="calories" fill="#E60000" barSize={5} />
            <Bar dataKey="kilogram" fill="#282D30" barSize={5}/>
        </BarChart>
    )
}
export default ActivityChart