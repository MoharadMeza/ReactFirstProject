import './AG.css'
import ReadMoreAU from '../ReadMoreAboutUs/ReadMoreAU.component'
const AgancyBrand = () => {
    const AB = 
        <div className="Agancy-brand">
            <div className="container">
                <div className="first-line"></div>
            </div>
            <div className="container">
                <div className="row px-3 justify-content-md-between justify-content-center">
                    <div className="col col-md-7 col-12 mb-3 pl-5">
                        <h1>
                            <b>
                                A Design Agency Built To Build Modern Brands…
                        </b>
                        </h1>
                    </div>
                    <div className="w-100"></div>
                    <div className="col col-md-8 col-12">
                        <div className="first-text pl-5 pt-2 pb-3 pr-3 text-light">
                            <p>
                                This core philosophy stands at the center of everything we make. The brands we build and
                                the
                                experiences we create live at the intersection of clarity and surprise, and are
                                positioned
                                to matter in culture through shared values and ideals.
                        </p>
                        </div>
                    </div>
                    <ReadMoreAU/>
                </div>
            </div>
        </div>
    
    return AB;
}
export default AgancyBrand;