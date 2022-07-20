import styled from 'styled-components'
 

export const Navlink = styled.p`
    font-weight:700;
    list-style:none;
    text-decoration:none;
    color:#707070;
    &:hover{
        a{
            color:black;
        }
    }
    @media(max-width:510px){
        margin-left:0.5rem;
        margin-top:2%;
        margin-bottom:2%;
    }
`
export const InnerNav=styled.div`
   display:flex;
   margin-left:10%;
   @media(max-width:510px){
      flex-direction:column;
   }
   `
export const NavContainer=styled.div`
   height:20%;
   padding:0.5% 0%;
   width:100%;
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
   height: 100%;
    width: 22%;
    margin-left: 3%;
    margin-top: auto;
    margin-bottom: auto;
    justify-content: space-between;
   @media(max-width:1300px){width:26%}
   @media(max-width:1200px){width:30%}
   @media(max-width:1000px){width:34%}
   @media(max-width:900px){width:40%}
   @media(max-width:750px){width:45%}
   @media(max-width:650px){
      width:55%;
      margin-left:7%;
      }

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