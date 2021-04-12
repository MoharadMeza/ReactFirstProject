import '../about-Brand/about-Brandstyle.css'
import logo from './imageaboutbranch/logo.png'
const AboutBrand=()=>{
    return(
        <>
        <section className="about-Brand ">
        <div className="bg-color-about-Brand">
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className=" col-4 offset-md-1 col-md-2 align-self-center mt-5 mb-5">
                        <img src={logo} alt="" class="img-fluid"/>
                    </div>
                    <div className=" col-11 col-md-5 align-self-center mt-md-5 mb-md-5 ">
                        <h3 className="Color-Description-about-Brand">
                            <b>In a digital-led and experience driveneconomy,
                                clients engage us to help them envision and create their future.
                            </b>
                        </h3>
                    </div>
                    <div className=" col-5 col-md-3 align-self-center p-0 mb-5">
                        <div>
                            <a href="#" class="readmore-about-Brand">
                                <b>read mor about us</b>
                            </a>
                        </div>
                        <div className="mb-5 btn-about-Brand">
                            <a href="#" class="btn "></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     </section>
        </>
    )
}
export default AboutBrand