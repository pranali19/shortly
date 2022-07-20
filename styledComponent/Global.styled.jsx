import styled, { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
body,h1,h2,h3,h4,h5,h6,p{
  font-family: 'Poppins', sans-serif;;
}
a{
  text-decoration: none;
  color:inherit;
}
`
export const BodyContainer= styled.div`
   height:auto;
   width:100%;
   padding:0%;
   min-height:100vh;
   margin:0%;

`