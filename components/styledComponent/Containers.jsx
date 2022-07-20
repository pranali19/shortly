import styled from 'styled-components'

export const BodyContainer= styled.div`
   height:auto;
   width:100%;
   padding:0%;
   min-height:100vh;
   margin:0%;

`
export const SiteTag = styled.div`
   height:auto;
   width:fit-content;
   padding-top:1.5%;
   padding-bottom:1%;
   @media(max-width:800px){
      margin-top: 3%;
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
export const IconContainer =styled.div`
   margin-left:0.2rem;
   background:transparent;
   display:flex;
   width:50%;
   grid-row:2;
   grid-column:1;
   margin-top:5%;
   justify-content: space-between;
   @media(max-width:1300px){
      width:60%;
   }
   @media(max-width:1000px){
      width:80%;
   }

    @media(max-width:750px){
      width:30%;
      margin:auto;
      justify-content: space-between;
      grid-row:3;
      margin-top:3%;
       margin-bottom:5%;
    }
    @media(max-width:650px){
      width:40%;
    }
    @media(max-width:500px){
      padding:3% 0%;
      width:50%;

    }
`

export const CopyBtnContainer=styled.div`
   height:100%;
   width:100%;
   background:green;
   display:flex;

`
export const BarContainer=styled.div`
   margin-top:auto;
   margin-bottom:auto;
   display:none;
   @media(max-width:510px){
      display:flex;
   }
`