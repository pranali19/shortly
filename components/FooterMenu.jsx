
import {CustomLink, FooterLink,FooterMenuLinksContainer,FooterMenuCategory} from '../styledComponent/Footer.styled'
 import { Navlink  } from '../styledComponent/Reusables.styled'


const MenuSections=({linkData})=>{
    return(
    <FooterMenuCategory>
       <Navlink color={'white'} margin={'2% auto'} >{linkData.title}</Navlink> 
       {
        linkData.links.map(link=>
            <FooterLink key={linkData.title+link.name}>
                <CustomLink href={link.path}>
                    {link.name}
                </CustomLink>
            </FooterLink>
        )
       }
        
    </FooterMenuCategory>
    )
}
const FooterMenu=()=>{
    return(
        <FooterMenuLinksContainer >
            {
                footerLinkData.map(linkData=><MenuSections key={linkData.title} linkData={linkData} />)
            }
        </FooterMenuLinksContainer>
    )
}

const footerLinkData=[
    {title:'Features',
    links:[
        {
            name:'Link Shortner',
            component:'',
            path:'/'
        },
        {
            name:'Branded Links',
            component:'',
            path:'/'
        },
        {
            name:'Analytics',
            component:'',
            path:'/'
        }
    ]},
    {title:'Resources',
    links:[
        {
            name:'Blog',
            component:'',
            path:'/'
        },
        {
            name:'Developers',
            component:'',
            path:'/'
        },
        {
            name:'Support',
            component:'',
            path:'/'
        }
    ]},
    {title:'Company',
    links:[
        {
            name:'About',
            component:'',
            path:'/'
        },
        {
            name:'Out team',
            component:'',
            path:'/'
        },
        {
            name:'Careers',
            component:'',
            path:'/'
        },
        {
            name:'Contact',
            component:'',
            path:'/'
        }
    ]}
]

export default FooterMenu