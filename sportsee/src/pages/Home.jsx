import VerticalBar from '../components/VerticalBar/VerticalBar';
import ActivityChart from '../components/ActivityChart/ActivityChart';
import PerformanceChart from '../components/PerformanceChart/PerformanceChart'
import { userInformations, userActivity, userPerformance } from '../mockedData/mockedData';
import { HomePageContainer } from './HomeStyle';
import '../styles/Home.css'

function Home() {
  return ( 
    <HomePageContainer>
      <VerticalBar />
      <div>
        <h1>Bonjour {userInformations.data.userInfos.firstName}</h1>
        <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        <ActivityChart data={userActivity.data.sessions} />
        <PerformanceChart data={userPerformance.data} />
  
      </div>
    </HomePageContainer>
  );
}

export default Home
