import styled from 'styled-components'
import meteor from '../../assets/image/Meteor.svg'
export const BodyContainer= styled.div`
   height:auto;
   width:100%;
   padding:0%;
   min-height:100vh;
   margin:0%;

`
export const InnerNav=styled.div`
   display:flex;
   margin-left:10%;
   @media(max-width:510px){
      flex-direction:column;
   }
   `

export const SiteTag = styled.div`
   height:auto;
   width:fit-content;
   padding-top:1.5%;
   padding-bottom:1%
`
export const SiteLogo_MenuBarContainer = styled.div`
margin-top:1%;
@media(max-width:510px){
   width:90%;
   display:flex;
   justify-content: space-between;

}
`
export const MenuItems =styled.div`
   display:inline-flex;
   height:100%;
   margin-left:3%;
   margin-top:auto;
   margin-bottom:auto;
   @media(min-width:510px){
      display:inline-flex !important;
   }
   @media(max-width:510px){
   display:flex;
   flex-direction:column;
   width:100%;
   margin-left:0;
   padding-bottom:4%;
   display:none ;
}
`

export const NavContainer=styled.div`
   height:20%;
   width:100%;
`
export const FooterMenuCategory= styled.div`
   @media(max-width:400px){
   width: 60%;
    margin-left: auto;
    margin-right: auto;
    margin-top:2.5%;
    margin-bottom:2.5%;
    justify-content: center;
    display: flex;
    flex-direction: column;
    padding-bottom: 3%;
   }
`
export const FooterContainer=styled.footer`
   height:fit-content;
   width:100%;
   background:black;
   padding-bottom:2%;
`

export const InnerFooter =styled.div`
    height:inherit;
    width:80%;
    margin-left:auto;
    margin-right:auto;
    display:grid;
    grid-template-columns: 25% auto;
    grid-template-rows: 40%;
    @media(max-width:750px){
      width:100%;
     }
     @media(max-width:510px){
      grid-template-columns: 1fr;
      grid-template-rows: auto;
     }
`

export const MediaIconContainer = styled.div`
   margin-left:0;


   &:hover{
      svg{
         fill:#2acfcf;
      }
   }
`
export const FooterSocialMediaLinks=styled.div`
   height:50%;
   width:40%;
   position:relative;
   top:18%;
   grid-column:1;
   grid-row:1;
   @media(max-width:1200px){
     margin-left:3% 
   }
   @media(max-width:510px){
     margin-left:auto;
     margin-right:auto; 
     padding-top:3%;
     padding-bottom:8%; 
     height:fit-content;
   }
`

export const IconContainer =styled.div`
   margin-left:0.2rem;
   background:transparent;
   display:flex;
   width:100%;
   grid-row:2;
   grid-column:1;
   justify-content: flex-start;
    gap: 6%;
    @media(max-width:500px){
      grid-row:3;
      width:50%;
      margin:auto;
      justify-content: space-between;

    }
`
export const FooterMenuLinksContainer = styled.div`
     display:grid;
     grid-template-columns:1fr 1fr 1fr;
     width:90%;
     height:100%;
     grid-gap:10%;
     padding-top:2%;
     @media(max-width:1200px){
      width:60%;
     }
     @media(max-width:1100px){
      width:70%;
     }
     @media(max-width:1000px){
      width:85%;
     }
     @media(max-width:900px){
      width:95%;
     }
     @media(max-width:510px){
      margin-left:auto;
      grid-row:2;
      grid-gap:0;
     }
     @media(max-width:400px){
      grid-template-columns:1fr;
      justify-content:center;
     }
`
export const DisplayContainer =styled.div`
   height:${props=>props.height};
   width:${props=>props.width?props.width:'100%'};
   background-color:white;
   display:flex;
   flex-direction:column;
   align-items:${props=>props.set?props.set:'normal'};
`
export const DisplayContainerLg =styled.div`
   height:85%;
   width:80%;
   background-color:'#fbf9ff';
   display:flex;
   flex-direction:column;
   @media(max-width:600px){
      height:90%;
      width:85%;
   }
   @media(max-width:550px){
      height:90%;
      width:90%;
   }
`
export const DisplayContainerApiCard =styled.div`
   height:max-content;
   width:100%;
   background-color:rgb(161 158 158 / 37%);
   display:flex;
   padding-bottom:10%;
   flex-direction:column;
`
export const ShortLinkBtnWrap  = styled.div`
display:flex;
padding:1% 0%;
@media(max-width:700px){
   margin-top:0.5rem;
   padding:0.3rem 0% 0.7rem 0%;
}
@media(max-width:400px){
   flex-direction:column;
   gap:0.5rem;
   padding:0.7rem 0%;
   margin-top:0.5rem;
}
`

export const FormContainer = styled.div`
   width:80%;
   height:fit-content;
   margin-left:auto;
   margin-right:auto;
   margin-top:-3.6%;
   position:relative;
   @media(max-width:1000px){
      width:90%;
   }
   @media(max-width:800px){
      width:94%;
   }
   
`

export const MeteorContainer = styled.div`
   background-image:url('/Meteor.svg') ;
   height:${props=>props.height?props.height:'fit-content'};
   width:100%;
   display:flex;
   background-size:cover;
   flex-direction:${props=>props.direction?props.direction:'row'};

`

export const InputContainer = styled.div`
     height:20vh;
     width:90%;
     margin:auto;
     display:flex;
     flex-direction:row;
     justify-content:center;
     align-items:center;
     @media(max-width:1100px){
      width:100%;
     }
     @media(max-width:400px){
      flex-direction:column;
      gap:2rem;
      padding:1rem 0.5rem;
   }
`
export const ShortLinkContainer =styled.div`
   height:auto;
   width:90%;
   margin-left:auto;
   margin-right:auto;
   background:white;
   padding:0rem 0.3rem;
   margin-top:1%;
   display:grid;
   box-shadow:0 2px 5px 0 rgb(0 0 0 / 16%);
   grid-template-columns: ${props=>props.layout?props.layout:' 60% 40%'};
   border-radius:8px;
   @media(max-width:1000px){
      grid-template-columns:1fr;
}
   @media(max-width:800px){
      width:90%;
      margin-top:2%;
   }
   @media(max-width:500px){
      margin-top:3.5%;
   }
`

export const CopyBtnContainer=styled.div`
   height:100%;
   width:100%;
   background:green;
   display:flex;

`
export const  StaticsContainer=styled.div`
     width:50%;
     margin-left:auto;
     margin-right:auto;
     margin-top:2%;
     padding:2% 0% 6% 0%;
     @media(max-width:800px){
         width:70%;
     }
     @media(max-width:500px){
      margin-top:15%;
      margin-bottom:15%;
         width:80%;
     }
     @media(max-width:400px){
      margin-top:20%;
      margin-bottom:20%;
         width:85%;
     }
`
export const CardsContainer =styled.div`
   height:fit-content;
   width:90%;
   display:grid;
   grid-template-columns:24vw auto 24vw auto 24vw;
   margin-left:auto;
   margin-right:auto;
   @media(max-width:750px){
      grid-template-columns: 45vw;
      justify-content:space-evenly;
    grid-template-rows: auto 20vw auto 20vw auto;
   }
   @media(max-width:650px){
      grid-template-columns: 55vw;
   }
   @media(max-width:550px){
      grid-template-columns: 60vw;
   }
   @media(max-width:400px){
      grid-template-columns: 75vw;
   }
   @media(max-width:320px){
      grid-template-columns: 85vw;
   }

`
export const SingleCard=styled.div`
   position: relative;
    display: flex;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-clip: border-box;
    border: 1px solid rgba(0,0,0,0.125);
    border-radius: .25rem;
    box-shadow: 0 2px 5px 0 rgb(0 0 0 / 16%), 0 2px 10px 0 rgb(0 0 0 / 12%);

   height:max-content;
   background:white;
   margin-top:10%;
   padding-bottom:10%;
`
export const GrowthIconContainer = styled.div`
   height:10vh;
   width:10vh;
   background:#3b3054;
   border-radius:50%;
   margin-top:-10%;
   margin-left:5%;
   display:flex;
   @media(max-width:750px){
      margin-left: auto;
      margin-right:auto;
   }

`

export const LineMark = styled.div`
   width:100%;
   height:3%;
   background:#2acfcf;
   margin-top:auto;
   margin-bottom:auto;

   @media(max-width:750px){
      height:calc(100% + 10vw);
      width:1.5vw;
      margin-left:auto;
      margin-right:auto;
   }
`

export const BarContainer=styled.div`
margin-top:auto;
margin-bottom:auto;
display:none;
@media(max-width:510px){
   display:flex;
}
`