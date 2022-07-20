import { InputContainer, 
     ApiInput } from "../styledComponent/ApiCard.styled"
import { MeteorContainer} from '../styledComponent/Reusables.styled'
import { ApiButton } from "../styledComponent/GetStart.styled"
import {SET_OK, SET_PENDING,SET_ERROR} from './reducers'



const handleSuccess=(setDispatch,setLink)=>{
    setDispatch(SET_OK);
    setLink('')
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
    const inputElem = document.getElementById('input');
    if(curlink){
        setDispatch(SET_PENDING)
        removeRedBorder(inputElem)
        const Url =`https://api.shrtco.de/v2/shorten?url=${curlink}`
        await fetch(Url,{
            method:"POST",
        })
        .then(res=>res.json())
        .then(res=>{      
            if(res && res.error_code==2){
                setRedBorder(inputElem)
                setDispatch(SET_ERROR)
            }else{
                setLinkList(state=>[...state,{link:curlink,shortLink:'https://'+res.result.short_link}])
                handleSuccess(setDispatch,setLink)
            }
        })
        .catch(err=>{
            setDispatch(SET_ERROR)
        });
        
       
    }
    else{
        setRedBorder(inputElem)
    }
}

const FormApi =({curlink, setLink,setLinkList,setDispatch})=>{
    return(
        <MeteorContainer height='25vh' mediaHeight='fit-content' flexDirection='row'>
            <InputContainer>
                <ApiInput id='input' placeholder='Shorten a link here...' value={curlink} onChange={(e)=>setLink(e.target.value)}/> 
                <ApiButton  m='auto 2%' height='40%' width='15%' background='#2acfcf' p='1rem' borderRadius='10px' howerBg='#32eded' mediaWidth={'100%'} onClick={()=>{handleShortenLink(curlink,setLinkList,setDispatch,setLink)}}>
                    Shorten It!
                </ApiButton>
            </InputContainer>
        </MeteorContainer>
    )
}

export default FormApi