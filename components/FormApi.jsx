import { MeteorContainer,
    InputContainer, 
    ShortLinkContainer,
    ShortLinkBtnWrap
 } from "./styledComponent/Containers"
import { ApiButton, ApiInput } from "./styledComponent/Inputs"
import { InputLink,ShortnedLink,CustomHr } from "./styledComponent/Fonts"
import {SET_OK, SET_PENDING,SET_ERROR} from './reducers'

const handleCopyClick=(value,setState)=>{ 
    setState(value)
    navigator.clipboard.writeText(value.shortLink)
}

const handleSuccess=(setDispatch,setLink)=>{
    setDispatch(SET_OK);
    setLink('')
}
export const History =({value,state,setState})=>{

    const getBtnValue= () =>{return value===state?'copied!':'copy'}
    const getBgValue= () =>{return value === state?'#2d2f32':'#33b5e5'}
    return( 
        <ShortLinkContainer >
            <div style={{display:'flex',width: '100%',overflow: 'hidden'}}>
                <InputLink >{value.link}</InputLink>    
            </div>

            <CustomHr />
            <ShortLinkBtnWrap>
                <ShortnedLink>{value.shortLink}</ShortnedLink>
                    <ApiButton background={getBgValue()} onClick={()=>handleCopyClick(value,setState)} width={'auto'} >
                        {getBtnValue()}
                    </ApiButton>
            </ShortLinkBtnWrap>

        </ShortLinkContainer>
    )
} 


const removeRedBorder=(inputElem)=>{
        inputElem.style.border= '2px solid #ced4da';
        inputElem.style.boxShadow='none';

    }
const setRedBorder=(inputElem)=>{
        inputElem.style.border= '2px solid red';
        inputElem.style.boxShadow='#ff0000a1 0px -1px 10px 0px';
    }


const handleShortenLink = async(curlink,setLinkList,setDispatch,setLink)=>{
    setDispatch(SET_PENDING)
    const inputElem = document.getElementById('input');

        removeRedBorder(inputElem)
        let data ;
        const Url =`https:api.shrtco.de/v2/shorten?url=${curlink}`
        const response = await fetch(Url)
        .then(res=>res.json())
        .then(res=>{
            setLinkList(state=>[...state,{link:curlink,shortLink:res.result.short_link}])
            handleSuccess(setDispatch,setLink)
        })
        .catch(err=>{
            if(data && data.error_code==2){
                setRedBorder(inputElem)
            }
            setDispatch(SET_ERROR)
        });
        
        console.log(data);

}

const FormApi =({curlink, setLink,setLinkList,setDispatch})=>{
    return(
        <MeteorContainer>
            <InputContainer>
                <ApiInput id={'input'} placeholder={'Shorten a link here...'} value={curlink} onChange={(e)=>setLink(e.target.value)}/> 
                <ApiButton onClick={()=>{handleShortenLink(curlink,setLinkList,setDispatch,setLink)}}>Shorten it!</ApiButton>
            </InputContainer>
        </MeteorContainer>
    )
}

export default FormApi