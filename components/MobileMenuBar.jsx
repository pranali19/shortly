// import MenuBar from '../assets/icons/menu.png'
import Image from 'next/image'
import {BarContainer} from '../styledComponent/Containers'

const handleBarClick=()=>{
    const menuDisplay = document.getElementById('menuItem').style;
    if(menuDisplay.display === 'flex' ){ 
        menuDisplay.setProperty("display","none")
    }
    else if(menuDisplay.display === 'none' || !menuDisplay.display){
        menuDisplay.setProperty("display","flex")
    }
}

const MobileMenuBar =()=>{
    return(
        <BarContainer onClick={handleBarClick}>
        <Image src='/menu.png' width={30} height={30} alt='menubar' />
        </BarContainer>
    )
}

export default MobileMenuBar