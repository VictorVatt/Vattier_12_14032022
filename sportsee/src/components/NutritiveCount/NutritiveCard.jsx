import { IconContainer, CardContainer, ContentContainer, Icon, Quantity, NutritiveType} from './NutritiveCardStyle'
import PropTypes from 'prop-types'


function NutritiveCard( { backgroundColor, icon, quantity, unity, type } ) {

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

NutritiveCard.propTypes = {
    backgroundColor : PropTypes.string.isRequired,
    icon : PropTypes.string.isRequired,
    quantity : PropTypes.number,
    unity : PropTypes.string.isRequired,
    type : PropTypes.string.isRequired
}