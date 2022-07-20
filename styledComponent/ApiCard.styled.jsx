import styled from 'styled-components'
import {color ,typography} from 'styled-system'


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
     @media(max-width:450px){
      flex-direction:column;
      gap:2rem;
      width:90%;
      padding:1rem 0.5rem;
   }
`

export const ApiInput =styled.input`
    display: block;
    width: 70%;
    height: calc(1.5em + 0.75rem + 2px);
    padding: .375rem .75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: .25rem;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    &:focus{
        outline:none !important;
        border: 2px solid #ced4da;
        box-shadow:0px 0px 8px #88f1e4;
    }
    ::placeholder{
        color:#f46262;
    }
    @media(max-width:650px){
      width:60%;
   }
   @media(max-width:450px){
    width:90%;
    margin:auto;
   }


`
export const FormContainer = styled.div`
   width:76%;
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
export const DisplayContainerApiCard =styled.div`
   height:max-content;
   width:100%;
   background-color:#9e9aa724;
   display:flex;
   padding-bottom:10%;
   margin-top:10vh;
   flex-direction:column;
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
   box-shadow:0 2px 2px 0 rgb(0 0 0 / 16%);
   grid-template-columns:60% 40%;
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

export const ShortLinkBtnWrap  = styled.div`
   display:flex;
   padding:1% 0%;
   justify-content: end;
   @media(max-width:1000px){
      justify-content: space-between;
   }
   @media(max-width:700px){
      margin-top:0.5rem;
      padding:0.3rem 0% 0.7rem 0%;
   }
   @media(max-width:450px){
      flex-direction:column;
      gap:0.5rem;
      margin-top:0rem;
   }
`

export const InputLinkContainer=styled.div`
   display:flex;
   width: 100%;
   overflow: hidden;
   padding:1% 0%;
   @media(max-width:400px){
      padding:3% 0%;
   }

`
export const StatusFont = styled.p`
    text-align:center;
    font-weight:500;
    ${color};
    @media(max-width:400px){
    font-size:14px;
   }
`
export const InputLink = styled(StatusFont)`
    font-weight:400;
    ${typography};
    ${color};
    display: inline;
    white-space: nowrap;
    width: max-content;
    font-size: 18px;
    @media(max-width:1200px){
      font-size:17px;
    }
    @media(max-width:1000px){
        margin:1%;
    }
    @media(max-width:500px){
        font-size:16px;
        word-break: normal;
        overflow:hidden;
    }
`
export const CustomHr= styled.hr`
   display:none;
   @media(max-width:1000px){
      display:block;
      width:100%;
      color:black;
      background:rgb(161 158 158 / 37%);
      margin:0;
   }
`