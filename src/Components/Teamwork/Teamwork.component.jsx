import './TeamworkCss/TM.css'
import img from '../../images/pexelsphoto1543895.jpeg'
const Teamwork = () => {
    const TM =
        <div class="teamwork">
            <div class="images">
                <img class="happy-girl load-image" src={img} alt="happy"></img>
            </div>
            <div class="container">
                <div class="row px-3 py-5 justify-content-md-between justify-content-center">
                    <div class="col col-auto mb-5 ml-sm-5">
                        <div class="readm">
                            <a class="b-text text-dark" href="#"><b> read more about us </b></a>
                        </div>
                        <div class="readm-bottom">
                            <a href="#" class="readmore-bottom btn btn-sm btn-end w-100"></a>
                        </div>
                    </div>
                    <div class="col col-md-7 col-12 mb-3 ps-5">
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