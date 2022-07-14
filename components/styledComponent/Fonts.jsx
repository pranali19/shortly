import styled from 'styled-components'



export const Navlink = styled.li`
    font-size:1.3rem;
    list-style:none;
    margin-left:1rem;
    text-decoration:none;
    color:#53565c;
    &:hover{
        a{
            color:black;
        }
    }
    @media(max-width:510px){
        margin-left:0.5rem;
   }
    `
export const FooterMenuTitle = styled.h3`
    font-size:1.4rem;
    color:white;
    margin:2% 1%;
    font-weight:400;
    @media(max-width:620px){
        font-size:1.2rem;
        margin-bottom:1.5%;
     }
     @media(max-width:400px){
        align-self:center;
        margin-bottom:3%;
     }
`
export const FooterLink =styled.li`
    list-style:none;
    width:90%;
    color:white;
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
     @media(max-width:400px){
        width:fit-content;
        align-self:center;
        margin:2% auto;
        font-weight:300;
     }


`

export const H1Title = styled.h1`
   width:70%;
   margin-top:0%;
   padding:0%;
   font-size:4rem;
   margin-top:-2%;
   height:fit-content;
   margin-left:auto;
   margin-right:auto;
   @media(max-width:1000px){
    font-size:3.2rem;
   }
   @media(max-width:800px){
    font-size:3rem;
   }
   @media(max-width:650px){
    font-size:2.5rem;
   }
   @media(max-width:650px){
    width:85%;
   }
`

export const StatusFont = styled.p`
    text-align:center;
    font-weight:500;
    color:${props=>props.color};
    @media(max-width:400px){
    font-size:0.7rem;
   }
`

export const InputLink = styled(StatusFont)`
    font-size:1rem;
    word-break: break-word;
    font-weight:500;
    text-align:left;
    color:#545252;
    @media(max-width:1000px){
        margin:0.5%;
        font-size:1.1rem;
    }
    @media(max-width:500px){
        font-size:0.9rem;
        word-break: normal;
        overflow:hidden;
    }
`
export const ShortnedLink = styled.p`
    margin:auto 2% auto auto;
    width:70%;
    text-align: end;
    @media(max-width:1000px){
        margin:auto 2% auto 0%;
        text-align: start;
    }
`

export const StaticsTitle = styled.h2`
    margin:0 auto;
    font-size:2.8rem;
    text-align:center;
    @media(max-width:500px){
    font-size:1.8rem;
        
    }
`
export const Para = styled.p`
    width:100%;
    margin-left:auto;
    margin-right:auto;
    color:${props=>props.color?props.color:'black'};
    text-align:${props=>props.set?props.set:'normal'};
    @media(max-width:800px){
        width:60%;
    }
    @media(max-width:300px){
        width:90%
    }

`
export const CardTitle=styled.h3`
   font-size:1.8rem;
   margin-left:10%;
   @media(max-width:1200px){
    font-size:1.5rem;
    }
    @media(max-width:1030px){
    font-size:1.2rem;
    }
    @media(max-width:850px){
    font-size:1.1rem;
    }

`
export const GetStartTitle= styled.h3`
    margin:0;
    font-size:2rem;
    margin-left:auto;
    margin-right:auto;
    color:white;
    @media(max-width:400px){
        font-size:1.8rem;
        text-align:center;
        width:90%;
    }
`
export const CardPara = styled.p`
    width:80%;
    margin-left:10%;
    margin-right:auto;
    @media(max-width:1030px){
    font-size:.9rem;
    }
    @media(max-width:850px){
    font-size:.8rem;
    }
    @media(max-width:750px){
        font-size:.9rem;
    }
`
export const CustomHr= styled.hr`
display:none;
@media(max-width:1000px){
    display:block;
    width:100%;
    color:black;
    background:rgb(161 158 158 / 37%);
}
`