
import {ShortLinkContainer} from "./styledComponent/Containers"
import {StatusFont} from './styledComponent/Fonts'
const StatusMsg=({status})=>{
    const color = status.error?'red':status.loading?'gray':'black'
    const message = status.error? 'Oops! something went wrong. Please check your url and try again'
                    :status.loading? 'please wait while we fetch your shorten link'
                    :''
    return(
        <ShortLinkContainer layout={'1fr'}>
            <StatusFont color={color}>{message}</StatusFont>
        </ShortLinkContainer>
    )
}

export default StatusMsg