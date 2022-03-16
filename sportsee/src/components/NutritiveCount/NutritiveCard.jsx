import calorieIcon from '../../assets/calorie-icon.svg'
import proteineIcon from '../../assets/proteine-icon.svg'
import glucideIcon from '../../assets/glucide-icon.svg'
import lipideIcon from '../../assets/lipide-icon.svg'

import { IconContainer, CardContainer, ContentContainer, Icon, Quantity, NutritiveType} from './NutritiveCardStyle'

function NutritiveCard( { type, quantity } ) {
    let icon
    let backgroundColor
    let unity
    switch (type) {
        case 'Calories': icon = calorieIcon; backgroundColor = "rgba(255, 0, 0, 0.1)"; unity = "kCal"
        break
        case 'Proteines' : icon = proteineIcon; backgroundColor = "rgba(74, 184, 255, 0.1)"; unity = 'g'
        break
        case 'Glucides' : icon = glucideIcon; backgroundColor = "rgba(249, 206, 35, 0.1)"; unity = 'g'
        break
        case 'Lipides' : icon = lipideIcon; backgroundColor = "rgba(253, 81, 129, 0.1)" ; unity = 'g'
        break;
        default : icon = calorieIcon; backgroundColor = "rgba(255, 0, 0, 0.1)"; unity = 'g'
    }
    return (
        <CardContainer>
            <IconContainer color={backgroundColor}>
                <Icon src={icon} alt="icon de nutriment" />
            </IconContainer>
            <ContentContainer>
                <Quantity>{quantity} {unity}</Quantity>
                <NutritiveType>{type}</NutritiveType>
            </ContentContainer>
        </CardContainer>
    )
}
export default NutritiveCard