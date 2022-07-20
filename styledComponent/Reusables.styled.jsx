import styled from 'styled-components'
import {color,width , margin,height,flexbox,background,mt} from 'styled-system'


export const Navlink = styled.p`
    font-weight:700;
    list-style:none;
    text-decoration:none;
    ${color}
    &:hover{
        a{
            color:black;
        }
    }
    @media(max-width:510px){
        ${margin};
    }
`
export const ApiButton= styled.button`
    margin: auto 2%;
    height:fit-content;
    ${'' /* width:${props=>props.width?props.width:'15%'}; */}
    ${width};
    background-color:${props=>props.background?props.background:'#2acfcf'};
    color: white;
    word-wrap: break-word;
    white-space: normal;
    letter-spacing: 0.02rem;
    cursor: pointer;
    border: 0;
    font-weight:700;
    border-radius: ${props=>props.radius};
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
export const MeteorContainer = styled.div`
    background-image:url('/Meteor.svg') ;
    ${height};
    width:100%;
    display:flex;
    background-size:cover;
    ${flexbox};
    @media(max-width:1000px){
       height:${props=>props.mediaHeight}
    }
 
 `
export const DisplayContainer =styled.div`
    ${height};
    ${width};
    ${background};
    display:flex;
    flex-direction:column;
    ${flexbox}
    ${mt};
    margin-top:1%;
    @media(max-width:1300px){
        height:fit-content;
        
    }
    @media(max-width:800px){
        background-color:white;
        margin-top:1.5%;
    }
    @media(max-width:650px){
        width:100%;
        margin-top:6.5%;
      
    }

`

 