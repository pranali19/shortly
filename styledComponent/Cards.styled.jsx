import styled from 'styled-components'


export const CardTitle=styled.h3`
   font-size:1.4rem;
   margin: 5% 0 5% 10%;
   @media(max-width:1200px){

    }
    @media(max-width:1030px){
    font-size:1.2rem;
    }
    @media(max-width:850px){
    font-size:1.1rem;
    margin: 5% auto;
    text-align:center;
    }

`
export const CardPara = styled.p`
    width: 80%;
    color: #686868;
    font-size: .9rem;
    letter-spacing: 0.02rem;
    font-weight: 400;
    margin-left: 10%;
    margin-right: auto;
    @media(max-width:1030px){
    font-size:.9rem;
    }
    @media(max-width:850px){
    font-size:.8rem;
    text-align:left;
    }
    @media(max-width:750px){
        font-size:.9rem;
    }
`
export const CardsContainer =styled.div`
   height:fit-content;
   width:90%;
   display:grid;
   margin-left:auto;
   margin-right:auto;
   margin-bottom:auto;
   height:max-content;
   width:95%;
   grid-template-columns: 26% auto 26% auto 26%;
   @media(max-width:1100px){
      grid-template-columns: 28% auto 28% auto 28%;  
   }
   @media(max-width:1000px){
      grid-template-columns: 30% auto 30% auto 30%;  
   }
   @media(max-width:750px){
      grid-template-columns: 55vw;
      justify-content:space-evenly;
   }
   @media(max-width:650px){
      grid-template-columns: 55vw;
   }
   @media(max-width:550px){
      grid-template-columns: 65vw;
   }
   @media(max-width:480px){
      grid-template-columns: 75vw;
      margin-bottom:10%;
   }
   @media(max-width:400px){
      grid-template-columns: 85vw;
      margin-bottom:15%;
   }
   @media(max-width:350px){
      grid-template-columns: 90vw;
   }

`
export const GrowthIconContainer = styled.div`
   height:10vh;
   width:10vh;
   background:#3b3054;
   border-radius:50%;
   margin-top:-10%;
   margin-left:5%;
   display:flex;
   padding:2%;
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
      height:10vw;
      width:1.5vw;
      margin-left:auto;
      margin-right:auto;
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
   background:white;
   margin-top:10%;
   padding-bottom:10%;
   @media(max-width:750px){
      height:35vh;
   }
   @media(max-width:400px){
      height: 35vh;
   }
`