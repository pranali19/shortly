const CustomLibrary={
   alignItem(props){
      return { 'align-items':props.set?props.set:'normal'}
   },
    height(props){
        return {height:props.height?props.height:"auto"}
    },
    width(props){
       return {width:props.width?props.width:'100%'}
    },
    bgColor(props){
       return {'background-color' : props.background?props.background:"white"}
    },
    marginTopm(props){
      return {'margin-top':props.marginTopm?props.marginTopm:''}
    }
    
 }

 export default CustomLibrary;