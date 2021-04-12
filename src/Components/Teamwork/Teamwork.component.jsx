import './TM.css'
import Images from '../Images/Images.component'
import ReadMoreAU from '../ReadMoreAboutUs/ReadMoreAU.component'
const Teamwork = (props) => {
    const TM =
        <div className="teamwork">
            <Images />
            <div className="container">
                <div className="row px-3 py-5 justify-content-md-between justify-content-center">
                    <ReadMoreAU/>
                    <div className="col col-md-7 col-12 mb-3 ps-5">
                        <h1><b>We named our agency BASIC because to us, the best brands are simple ones. Brands
                        thrive
                        on
                        their ability to be understood. People do too.
                    </b></h1>
                    </div>
                </div>
            </div>
        </div>

    return TM;
}
export default Teamwork;