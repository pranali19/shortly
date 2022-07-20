
import {H1Title ,PictureContainer} from '../styledComponent/ContainerWithPicture.styled'
import {DisplayContainer} from '../styledComponent/Reusables.styled'
const ContainerBeforePicture=()=>{

    return(
        <DisplayContainer height={"90vh"} alignItems={'self-end'}>
        
            <DisplayContainer height='80%' width='95%' background='#fbf9ff70' mt='3%'>
                <H1Title>MORE THAN JUST SHORTER LINKS</H1Title>
                <PictureContainer src="/working people.png" />
            </DisplayContainer>


        </DisplayContainer>
    )
}

export default ContainerBeforePicture