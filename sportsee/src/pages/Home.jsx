import VerticalBar from '../components/VerticalBar/VerticalBar';
import NutritiveCard from '../components/NutritiveCount/NutritiveCard';
import ActivityChart from '../components/ActivityChart/ActivityChart';
import ScoreChart from '../components/ScoreChart/ScoreChart';
import AverageDurationChart from '../components/AverageDurationChart/AverageDurationChart';
import PerformanceChart from '../components/PerformanceChart/PerformanceChart'
import { userInformations } from '../mockedData/mockedData';
import { HomePageContainer, MainContentContainer, MainTitle, HeaderContent, ChartsContainer, NutritiveCardContainer, SquareCharts } from './HomeStyle';
import '../styles/Home.css'

function Home() {
  return ( 
    <HomePageContainer>
      <VerticalBar />
      <MainContentContainer>
        <MainTitle>Bonjour <span style={{color: '#FF0000'}}>{userInformations.data.userInfos.firstName}</span></MainTitle>
        <HeaderContent>Félicitation ! Vous avez explosé vos objectifs hier 👏</HeaderContent>
        <ChartsContainer>
          <div>
            <ActivityChart id={12} />
            <SquareCharts>
              <AverageDurationChart id={12} />
              <PerformanceChart id={18} />
              <ScoreChart id={12} />
            </SquareCharts>
          </div>
          <NutritiveCardContainer>
              <NutritiveCard type={"Calories"} quantity={userInformations.data.keyData.calorieCount} />
              <NutritiveCard type={"Proteines"} quantity={userInformations.data.keyData.proteinCount} />
              <NutritiveCard type={"Glucides"} quantity={userInformations.data.keyData.carbohydrateCount} />
              <NutritiveCard type={"Lipides"} quantity={userInformations.data.keyData.lipidCount} />
          </NutritiveCardContainer>
        </ChartsContainer>
  
      </MainContentContainer>
    </HomePageContainer>
  );
}

export default Home
