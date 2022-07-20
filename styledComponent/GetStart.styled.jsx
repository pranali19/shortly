import styled from 'styled-components'
import {background, borderRadius, height, margin, padding, width} from 'styled-system'

export const GetStartTitle= styled.h3`
    margin:0;
    font-size:2rem;
    margin-left:auto;
    margin-right:auto;
    color:white;
    @media(max-width:600px){
        margin-bottom:3%;
    }
    @media(max-width:400px){
        font-size:1.8rem;
        text-align:center;
}
`
export const ApiButton= styled.button`

    ${margin};
    ${height};
    ${width};
    ${background};
    ${borderRadius};
    ${padding};

    color: white;
    white-space: normal;
    cursor: pointer;
    border: 0;
    box-shadow: 0 2px 5px 0 rgb(0 0 0 / 16%), 0 2px 10px 0 rgb(0 0 0 / 12%);
    font-weight:700;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out,-webkit-box-shadow .15s ease-in-out;
    
    font-size: 16px;
    letter-spacing: 0.02rem;
    word-wrap: break-word;
    &:hover{
        background-color:${props=>props.howerBg};
        box-shadow: 0 4px 10px 0 rgb(0 0 0 / 16%), 0 2px 8px 0 gray;

    }
    @media(max-width:1200px){
        width:fit-content;
    }
    @media(max-width:1000px){
      font-size:0.85rem;
      width:auto;
      padding:${props=>props.mediaPadding};
     }
     @media(max-width:450px){
      flex-direction:column;
      font-size:16px;
      width:${props=>props.mediaWidth};
      margin: auto;
      align-items:center;
   }
    `
export const GetStartButton=styled.button`
    ${margin};
    ${height};
    ${width};
    ${background};
    ${borderRadius};
    ${padding};

    font-weight:700;
    color: white;
    white-space: normal;
    cursor: pointer;
    border: 0;
    box-shadow: 0 2px 5px 0 rgb(0 0 0 / 16%), 0 2px 10px 0 rgb(0 0 0 / 12%);
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out,-webkit-box-shadow .15s ease-in-out;
    font-size: .81rem;
    &:hover{
        background-color:${props=>props.howerBg};
        box-shadow: 0 3px 6px 0 rgb(0 0 0 / 16%), 0 2px 8px 0 gray;
    }
    @media(max-width:400px){
        padding:0.75rem;
    }
    `