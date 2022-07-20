import {IconContainer, MediaIconContainer} from '../styledComponent/SocialIcons.styled'
import TwitterIcon from '../assets/icons/icon-twitter.svg'
import PintrestIcon from '../assets/icons/icon-pinterest.svg' ;
import FbIcon from '../assets/icons/icon-facebook.svg' 
import InstagramIcon from '../assets/icons/icon-instagram.svg' 

const socialMedia=[
    {name:'fb',icon:FbIcon,Url:''},
    {name:'Instagram',icon:InstagramIcon,Url:''},
    {name:'Pintrest',icon:PintrestIcon,Url:''},
    {name:'Twitter',icon:TwitterIcon,Url:''},

]
const Icon =({icon:MediaIcon, url})=>{
    return(
        <MediaIconContainer>
            <MediaIcon width={"24"} height={"24"} fill={'white'}  />
        </MediaIconContainer>
    ) 
        
}
const SocialIcons =()=>{
    return(
            <IconContainer>
            {
                socialMedia.map(mediaItem=>
                    <Icon icon={mediaItem.icon} url={mediaItem.Url} key={mediaItem.name} />
                )
            
            }
            </IconContainer>
    )
}

export default SocialIcons