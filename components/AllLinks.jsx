
import {InputLink, CustomHr,ShortLinkContainer, ShortLinkBtnWrap,InputLinkContainer } from '../styledComponent/ApiCard.styled'
import {ApiButton} from '../styledComponent/GetStart.styled'
const handleCopyClick=(value,setState)=>{ 
    setState(value)
    navigator.clipboard.writeText(value.shortLink)
}


const AllLinks =({value,state,setState})=>{

    const getBtnValue= () =>{return value===state?'Copied!':'Copy'}
    const getBgValue= () =>{return value === state?'#2d2f32':'#33b5e5'}

    return( 
        <ShortLinkContainer >
          
            <InputLinkContainer>
                <InputLink textAlign={'right'} color={'black'} >{value.link}</InputLink>    
            </InputLinkContainer>
     

            <CustomHr />
            <ShortLinkBtnWrap>

            <InputLink textAlign={'left'} color={'#2acfcf'} >{value.shortLink}</InputLink>
                    <ApiButton m='auto 2%' width='30%' p='0.6rem 1rem' borderRadius='5px' mediaWidth='95%'  mediaPadding='0.6rem 1.9rem' background={getBgValue()} onClick={()=>handleCopyClick(value,setState)} >
                        {getBtnValue()}
                    </ApiButton>
            </ShortLinkBtnWrap>

        </ShortLinkContainer>
    )
} 

export default AllLinks