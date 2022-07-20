import styled from 'styled-components';
import Link from 'next/link';

export const CustomLink = styled(Link)`
    color:blue;
    text-decoration:none;
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
    grid-template-columns: 30% auto;
    grid-template-rows: 40%;
    padding-top: 4%;
    @media(max-width:750px){
        width:100%;
        padding:5% 0%;
        grid-template-columns: 1fr;
        grid-template-rows: auto;
    }
`

export const FooterSocialMediaLinks=styled.div`
    justify-content: center;
    align-content: center;
    align-self: end;
    grid-column: 1;
    grid-row: 1;
    padding-bottom:2%;
    @media(max-width:1200px){
        margin-left:3% 
    }
   @media(max-width:750px){
        margin-left:auto;
        margin-right:auto;
        width:fit-content;
        padding:2%;
   }
   @media(max-width:510px){
        margin-left:auto;
        margin-right:auto; 
        padding-top:3%;
        padding-bottom:3%; 
        height:fit-content;
   }
`

export const FooterMenuLinksContainer = styled.div`
    display:grid;
    grid-template-columns:1fr 1fr 1fr;
    width:90%;
    height:100%;
    grid-gap:10%;
    padding-top:2%;
    @media(max-width:1000px){
        width:100%;
        justify-items: self-end;
    }
    @media(max-width:750px){
        justify-items: center;
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
export const FooterLink =styled.li`
        list-style:none;
        margin:5% auto;
        color:#ffffffb3;
        cursor:pointer;
        text-decoration:none;
        font-size:0.95rem;
        &:hover{
            a{
                color:#2acfcf;
            }
        }
        @media(max-width:620px){
            font-size:0.9rem;
        }
        @media(max-width:500px){
        margin:10% auto;
        }
        @media(max-width:400px){
            width:fit-content;
            align-self:center;
            margin:2% auto;
            font-weight:300;
        }


`