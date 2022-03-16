import { RadialBarChart, RadialBar, Legend, ResponsiveContainer, Tooltip } from 'recharts';

const data = [
  {
    "score": 2,
  },

];


function ScoreChart() {


    return (
        <RadialBarChart 
  width={250} 
  height={250} 
  innerRadius="70%" 
  outerRadius="80%" 
  data={data}
  barSize={5} 
>
  <RadialBar minAngle={30} maxAngle={1} label={{ fill: 'red', position: 'bottom' }} background clockWise={true} dataKey='score' />
  <Tooltip />
</RadialBarChart>
    );

}

export default ScoreChart
