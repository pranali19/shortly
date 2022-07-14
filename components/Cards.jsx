
import {CardsContainer, GrowthIconContainer, LineMark, SingleCard} from './styledComponent/Containers'
import { CardTitle, CardPara } from './styledComponent/Fonts'
import ProgressUpIcon from '../assets/icons/icon-brand-recognition.svg' 

const GrowthIcon=()=>{
    return(
        <GrowthIconContainer>
            <div style={{margin:'auto'}}>
            <ProgressUpIcon width="40" height="40" />
            </div>
        </GrowthIconContainer>
    )
}
const Card=()=>{
    return(
        <SingleCard >
        <GrowthIcon/>
            <CardTitle>Brand Recognition</CardTitle>
            <CardPara >Boost your Brand Recognition with each click. Generic link dont mean a thing. Branded links help instil confidence in your content</CardPara>
        </SingleCard>
    )
}
const Line=()=>{
    return(
        <LineMark/>
    )
}
const Cards=()=>{
    return(
    <CardsContainer>
        <Card/>
        <Line/>
        <Card/>
        <Line/>
        <Card/>
    </CardsContainer>
    )
}

export default Cards