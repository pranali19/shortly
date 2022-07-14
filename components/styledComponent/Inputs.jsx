import styled from "styled-components";
import Link from 'next/link';

export const CustomLink = styled(Link)`
color:blue;
text-decoration:none;
`
export const PictureContainer = styled.img`
   position:relative;
   height:406px;
   width:405px;
   margin-left:auto;
   margin-right:auto;
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
    @media(max-width:650px){
      width:60%;
   }
   @media(max-width:400px){
    width:90%;
    margin:auto;
   }


`

export const ApiButton= styled.button`
    margin: auto 2%;
    height:fit-content;
    width:${props=>props.width?props.width:'15%'};
    background-color:${props=>props.background?props.background:'#2acfcf'};
    color: white;
    word-wrap: break-word;
    white-space: normal;
    letter-spacing: .02rem;
    cursor: pointer;
    border: 0;
    font-weight:700;
    border-radius: .125rem;
    box-shadow: 0 2px 5px 0 rgb(0 0 0 / 16%), 0 2px 10px 0 rgb(0 0 0 / 12%);
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out,-webkit-box-shadow .15s ease-in-out;
    padding: .8rem 1rem;
    font-size: .81rem;
    &:hover{
    box-shadow: 0 4px 10px 0 rgb(0 0 0 / 16%), 0 2px 8px 0 gray;

    }
    @media(max-width:1000px){
      font-size:0.85rem;
      width:auto;
     }
     @media(max-width:400px){
      flex-direction:column;
      width:100%;
      margin: auto;
      align-items:center;
   }
    `

export const GetStartButton=styled.button`
    margin:4% auto;
    height:fit-content;
    width:40%;
    background-color:${props=>props.background?props.background:'#33b5e5'};
    color: white;
    text-transform: uppercase;
    white-space: normal;
    cursor: pointer;
    border: 0;
    border-radius: 1.3rem;
    box-shadow: 0 2px 5px 0 rgb(0 0 0 / 16%), 0 2px 10px 0 rgb(0 0 0 / 12%);
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out,-webkit-box-shadow .15s ease-in-out;
    padding: 1rem;
    font-size: .81rem;
    &:hover{
    box-shadow: 0 3px 6px 0 rgb(0 0 0 / 16%), 0 2px 8px 0 gray;

    }
    @media(max-width:400px){
        padding:0.75rem;
    }
    `