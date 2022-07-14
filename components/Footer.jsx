import { InnerFooter,
    FooterSocialMediaLinks } from "./styledComponent/Containers"
import SocialIcons from '../components/SocialIcons';
import FooterMenu from "./FooterMenu";
import SiteLogo from './Sitelogo' 
const Footer =()=>{
    return(
        <InnerFooter>
            <FooterSocialMediaLinks>
                <SiteLogo ColorFill={'#ffffff'}/>
            </FooterSocialMediaLinks>
            <SocialIcons />
            <FooterMenu />
        </InnerFooter>
    )
}

export default Footer