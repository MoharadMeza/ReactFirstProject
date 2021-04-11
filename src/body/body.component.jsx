import '../body/bodystyle.css'
import '../../node_modules/roboto-fontface/fonts/roboto/Roboto-BlackItalic.woff'
import '../../node_modules/roboto-fontface/fonts/roboto/Roboto-BlackItalic.woff2'

const Body=(props)=>{
    return( 
        <>
    <div className="fontbody"></div> 
    {props.children}
    </>
    )
}
export default Body;