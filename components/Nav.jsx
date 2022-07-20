import { MenuItems,InnerNav,SiteLogo_MenuBarContainer } from "../styledComponent/Nav.styled";
import {Navlink} from '../styledComponent/Reusables.styled'

import SiteLogo from './Sitelogo' 
import Link from 'next/link'
import MobileMenuBar from './MobileMenuBar'

const MenuLinkItem=({href,label})=>{
    return(
        <Navlink color={'#707070'} margin={'2% auto 2% 0.5%'}>
            <Link href={href} >
                {label}
            </Link>
        </Navlink>
    )
}
const Nav =()=>{
 
    return(
        <InnerNav>
            <SiteLogo_MenuBarContainer>
                <SiteLogo ColorFill="#34313D"/>
                <MobileMenuBar />
            </SiteLogo_MenuBarContainer>
            <MenuItems id="menuItem">
                <MenuLinkItem href='/' label='Features'/>
                <MenuLinkItem href='/' label='Pricing'/>
                <MenuLinkItem href='/' label='Resources'/>   
            </MenuItems>
          
        </InnerNav>
    )
}
export default Nav;