import {DisplayContainer,DisplayContainerLg} from '../components/styledComponent/Containers'
import { H1Title } from './styledComponent/Fonts'

import {PictureContainer} from './styledComponent/Inputs'
const ContainerWithPicture=()=>{

    return(
        <DisplayContainer height={"fit-content"} set={'self-end'}>
        
            <DisplayContainerLg>
                <H1Title>MORE THAN JUST SHORTER LINKS</H1Title>
            </DisplayContainerLg>

            <PictureContainer src="/working people.png" />

        </DisplayContainer>
    )
}

export default ContainerWithPicture