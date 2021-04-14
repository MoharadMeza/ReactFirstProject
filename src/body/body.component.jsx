import '../body/bodystyle.css'
import "@fontsource/roboto/500.css" // Weight 500.

const Body=(props)=>{
    return( 
        <>
    <div className="fontbody"> 
    {props.children}
    </div>
    </>
    )
}
export default Body;