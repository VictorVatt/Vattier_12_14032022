import { IconContainer, CardContainer, ContentContainer, Icon, Quantity, NutritiveType} from './NutritiveCardStyle'


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