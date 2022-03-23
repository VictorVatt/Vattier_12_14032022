import { RadialBarChart, RadialBar, PolarAngleAxis } from 'recharts';
import { useState, useEffect } from 'react';
import ApiProvider from '../../Api/ApiProvider';


import { WhiteCircle, ScoreChartContainer, TextLegend, Objectif } from './ScoreChartStyle';


function ScoreChart( { id }) {

    let [ data, setData ] = useState()
    
    useEffect(() => {
        new ApiProvider().getMainUserData(id)
            .then( res => setData(res.score))
    }, [id])
    let dataFormat = [{ "score": data }]
    console.log(dataFormat)

    return (
      <ScoreChartContainer>
        <TextLegend>Score</TextLegend>
        <WhiteCircle>{data * 100}% <Objectif>de votre objectif</Objectif></WhiteCircle>
        <RadialBarChart width={200} height={200} data={dataFormat} innerRadius={86} outerRadius={100} startAngle={220} endAngle={-140}>
          <PolarAngleAxis type="number" domain={[0, 1]} dataKey={"score"} angleAxisId={0} tick={false} />
          <RadialBar  dataKey={"score"} angleAxisId={0} data={dataFormat} fill={"red"}  cornerRadius={10} />
        </RadialBarChart>
      </ScoreChartContainer>
    );

}

export default ScoreChart
