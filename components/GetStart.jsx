import {  MeteorContainer} from '../styledComponent/Reusables.styled'

import { GetStartButton , ApiButton, GetStartTitle } from '../styledComponent/GetStart.styled'

const GetStart=()=>{
    return(
        <MeteorContainer height='35vh' flexDirection='column'>
            <div style={{margin:'auto 0%',display:'flex',flexDirection:'column'}}>
                <GetStartTitle>
                    Boost your link today
                </GetStartTitle>

                <ApiButton m='1% auto' height='fit-content' width='12%' background='#2acfcf' p='1rem' borderRadius='1.3rem' howerBg='#32eded' mediaWidth={'40%'} >
                    Get Started
                </ApiButton>
            </div>
        </MeteorContainer>
    )
}

export default GetStart