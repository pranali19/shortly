
import {StatusFont,ShortLinkContainer} from '../styledComponent/ApiCard.styled'
const StatusMsg=({status})=>{
    const color = status.error?'red':status.loading?'gray':'black'
    const message = status.error? 'Oops! something went wrong. Please check your url and try again'
                    :status.loading? 'please wait while we fetch your shorten link'
                    :''
    return(
        <ShortLinkContainer gridTemplateColumns={'1fr'}>
            <StatusFont color={color}>{message}</StatusFont>
        </ShortLinkContainer>
    )
}

export default StatusMsg