import {DisplayContainerApiCard, FormContainer,StaticsContainer} from '../components/styledComponent/Containers'
import FormApi, { History } from './FormApi'
import Statics from '../components/Statics';
import Cards from './Cards';
import { useReducer, useState } from "react"
import StatusMsg from './StatusMsg';
import reducer from './reducers';

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
                        linkList.map(i=><History value={i} state={currentCopy} setState={setCurrentCopy} />)
                    }
                </div>
            </FormContainer>
            <Statics/>
            <Cards/> 
        </DisplayContainerApiCard>
    )
}
export default ApiAndCard