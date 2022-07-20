import Logo from '../assets/icons/logo.svg'
import { SiteTag } from "../styledComponent/Containers";

const SiteLogo=({ColorFill})=>{
    return(
    <SiteTag >
        <Logo width={"120"} height={"35"} fill={ColorFill}/>
    </SiteTag>
    )
}
export default SiteLogo