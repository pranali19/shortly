import {DisplayContainerApiCard, FormContainer} from '../styledComponent/ApiCard.styled'
import FormApi from './FormApi'
import Statics from './Statics';
import Cards from './Cards';
import { useReducer, useState } from "react"
import StatusMsg from './StatusMsg';
import reducer from './reducers';
import AllLinks from './AllLinks'
const ApiAndCard=()=>{
    const [currentCopy,setCurrentCopy] = useState('')
    const [linkList,setLinkList] = useState([])
    const [curlink, setLink] = useState('')
    const [error,setError] = useState(false)
    const [status ,dispatch]  = useReducer(reducer,{statusOk:false,loading:false,error:false})

    return( 
        <DisplayContainerApiCard>
       
            <FormContainer>
                <FormApi setLinkList={setLinkList} setDispatch={dispatch} curlink={curlink} setLink={setLink} />
                {status.loading || status.error ?<StatusMsg status={status} />:''}
                <div>
                    { 
                        linkList.map((i,indx)=><AllLinks key={'shortLink'+String(indx)} value={i} state={currentCopy} setState={setCurrentCopy} />)
                    }
                </div>
            </FormContainer>
            <Statics/>
            <Cards/> 
        </DisplayContainerApiCard>
    )
}
export default ApiAndCard