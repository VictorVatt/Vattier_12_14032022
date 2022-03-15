import { VerticalBarContainer, IconPartContainer, IconContainer, Icon, Copyright } from './VerticalBarStyle'
import yogaIcon from '../../assets/yoga-icon.svg'
import swimmingIcon from '../../assets/swimming-icon.svg'
import veloIcon from '../../assets/velo-icon.svg'
import muscuIcon from '../../assets/muscu-icon.svg'

function VerticalBar() {
    
    return (
        <VerticalBarContainer>
            <IconPartContainer>
                <IconContainer><Icon src={yogaIcon} alt='icon de sport'/></IconContainer>
                <IconContainer><Icon src={swimmingIcon} alt='icon de sport'/></IconContainer>
                <IconContainer><Icon src={veloIcon} alt='icon de sport'/></IconContainer>
                <IconContainer><Icon src={muscuIcon} alt='icon de sport'/></IconContainer>
            </IconPartContainer>
            <Copyright>Copiryght, SportSee 2020</Copyright>
        </VerticalBarContainer>
    )
}

export default VerticalBar