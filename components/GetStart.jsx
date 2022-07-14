import {MeteorContainer} from '../components/styledComponent/Containers'
import { GetStartTitle } from './styledComponent/Fonts'
import { GetStartButton } from './styledComponent/Inputs'

const GetStart=()=>{
    return(
        <MeteorContainer height={'30vh'} direction='column'>
            <div style={{margin:'auto',display:'flex',flexDirection:'column'}}>
                <GetStartTitle>Boost your link today</GetStartTitle>
                <GetStartButton >Get Started</GetStartButton>
            </div>
        </MeteorContainer>
    )
}

export default GetStart