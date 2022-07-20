import styled from 'styled-components'


export const  StaticsContainer=styled.div`
    width:50%;
    margin-left:auto;
    margin-right:auto;
    margin-top:2%;
    padding:2% 0% 6% 0%;
    @media(max-width:950px){
        width:65%;
    }
    @media(max-width:800px){
        width:70%;
    }
    @media(max-width:500px){
    margin-top:15%;
    margin-bottom:15%;
        width:98%;
    }
    @media(max-width:400px){
    margin-top:30%;
    margin-bottom:20%;
    }
`
export const StaticsTitle = styled.h2`
    margin:0 auto;
    font-size:2.8rem;
    text-align:center;
    @media(max-width:650px){
    font-size:2.4rem;
        
    }
    @media(max-width:570px){
    font-size:2rem;
    }
    @media(max-width:400px){
    font-size:1.8rem;
    }
`

export const StaticsSubText = styled.p`
    width: 70%;
    word-spacing: 0.08rem;
    margin-left: auto;
    margin-right: auto;
    color: #818181;
    text-align: center;
    font-size:18px;
    font-weight:400;
`