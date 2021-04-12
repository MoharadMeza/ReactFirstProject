import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Body from '../body/body.component'
import PhotoCollection from '../photoCollection/photoCollection.component'
import BrandCreation from '../brandCreation/brandCreation.component'
import AboutBrand from '../about-Brand/about-Brand.compnent'
import Footer from '../footer/footer.component'

const App3=()=>{
    return(
       <>
       <Body>
           <>
            <PhotoCollection/>
            <BrandCreation/>
            <AboutBrand/>
            <Footer/>
            </>
        </Body>
        </>
   )
}
export  default App3;