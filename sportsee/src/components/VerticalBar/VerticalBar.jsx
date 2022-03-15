import { VerticalBarContainer, IconContainer } from './VerticalBarStyle'
import yogaIcon from '../../assets/yoga-icon.svg'
import swimmingIcon from '../../assets/swimming-icon.svg'
import veloIcon from '../../assets/velo-icon.svg'
import muscuIcon from '../../assets/muscu-icon.svg'

function VerticalBar() {
    
    return (
        <VerticalBarContainer>
            <IconContainer><img src={yogaIcon} alt='icon de sport'/></IconContainer>
            <IconContainer><img src={swimmingIcon} alt='icon de sport'/></IconContainer>
            <IconContainer><img src={veloIcon} alt='icon de sport'/></IconContainer>
            <IconContainer><img src={muscuIcon} alt='icon de sport'/></IconContainer>
            Pipi
        </VerticalBarContainer>
    )
}

export default VerticalBar