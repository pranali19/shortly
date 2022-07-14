import { FooterMenuLinksContainer,FooterMenuCategory } from "./styledComponent/Containers"
import {FooterLink, FooterMenuTitle} from './styledComponent/Fonts'
import {CustomLink} from '../components/styledComponent/Inputs'



const MenuSections=({linkData})=>{
    return(
    <FooterMenuCategory>
       <FooterMenuTitle>{linkData.title}</FooterMenuTitle> 
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