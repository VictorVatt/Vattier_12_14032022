import VerticalBar from '../components/VerticalBar/VerticalBar';
import NutritiveTracker from '../components/NutritiveTracker/NutritiveTracker';
import ActivityChart from '../components/ActivityChart/ActivityChart';
import ScoreChart from '../components/ScoreChart/ScoreChart';
import AverageDurationChart from '../components/AverageDurationChart/AverageDurationChart';
import PerformanceChart from '../components/PerformanceChart/PerformanceChart'
import { userInformations } from '../mockedData/mockedData';
import { HomePageContainer, MainContentContainer, MainTitle, HeaderContent, ChartsContainer, NutritiveCardContainer, SquareCharts } from './HomeStyle';
import '../styles/Home.css'

function Home( { id }) {
  return ( 
    <HomePageContainer>
      <VerticalBar />
      <MainContentContainer>
        <MainTitle>Bonjour <span style={{color: '#FF0000'}}>{userInformations.data.userInfos.firstName}</span></MainTitle>
        <HeaderContent>Félicitation ! Vous avez explosé vos objectifs hier 👏</HeaderContent>
        <ChartsContainer>
          <div>
            <ActivityChart id={id} />
            <SquareCharts>
              <AverageDurationChart id={id} />
              <PerformanceChart id={id} />
              <ScoreChart id={id} />
            </SquareCharts>
          </div>
          <NutritiveCardContainer>
            <NutritiveTracker id={id}/>
          </NutritiveCardContainer>
        </ChartsContainer>
  
      </MainContentContainer>
    </HomePageContainer>
  );
}

export default Home
