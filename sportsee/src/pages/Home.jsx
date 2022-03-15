import VerticalBar from '../components/VerticalBar/VerticalBar';
import { userInformations } from '../mockedData/mockedData';
import { HomePageContainer } from './HomeStyle';
import '../styles/Home.css'

function Home() {
  return ( 
    <HomePageContainer>
      <VerticalBar />
      <div>
        <h1>Bonjour {userInformations.data.userInfos.firstName}</h1>
        <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p> 
      </div>
    </HomePageContainer>
  );
}

export default Home
