import logo from '../../assets/logo-sportsee.svg'

import { HeaderContainer, HeaderLogo, HeaderLink, HeaderNav } from './HeaderStyle'
function Header() {
    return (
        <HeaderContainer>
            <HeaderLogo src={logo} alt="logo de sportsee" />
            <HeaderNav>
                <HeaderLink href='/'>Accueil</HeaderLink>
                <HeaderLink href='/'>Profil</HeaderLink>
                <HeaderLink href='/'>Réglages</HeaderLink>
                <HeaderLink href='/'>Communauté</HeaderLink>
            </HeaderNav>
        </HeaderContainer>
    )
}

export default Header