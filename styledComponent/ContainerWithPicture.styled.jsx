import styled from "styled-components";
// change to styled-system

export const H1Title = styled.h1`
   width:70%;
   color:#232127;
   line-height:1.1;
   padding:0%;
   font-size:6rem;
   height:fit-content;
   margin:-1% auto 1% auto;
   letter-spacing:0.1rem;
   @media(max-width:1300px){font-size:5.5rem}
   @media(max-width:1200px){font-size:5rem}
   @media(max-width:1100px){font-size:4.6rem}

   @media(max-width:1000px){font-size:4.3rem;}
   @media(max-width:900px){font-size:4rem}
   @media(max-width:800px){font-size:3.5rem}
   @media(max-width:650px){
    text-align:center;
    font-size:3rem;
    width:90%;
   }
`

export const PictureContainer = styled.img`
position:relative;
height:406px;
width:405px;
margin-left:auto;
margin-right:auto;
top:10vh;
margin-top:-5%;
@media(max-width:800px){
 width:350px;
 height:340px;
}
@media(max-width:650px){
 width:300px;
 height:290px;
}
@media(max-width:500px){
 width:240px;
 height:230px;
}

`



export const DisplayContainerLg =styled.div`
   height:80%;
   width:95%;
   background-color:#fbf9ff70;
   display:flex;
   flex-direction:column;
   margin-top:3%;
   @media(max-width:800px){
      background-color:white;
   }
   @media(max-width:650px){
      width:100%;
   }
`