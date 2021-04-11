import './brandcreationstyle.css'
import brandCreation from './imgBrandCreation/brandCreation.png'
import brandCreationicon1 from './imgBrandCreation/brandCreationicon1.png'
import brandCreationicon2 from './imgBrandCreation/brandCreationicon2.png'
import brandCreationicon3 from './imgBrandCreation/brandCreationicon3.png'
import brandCreationicon4 from './imgBrandCreation/brandCreationicon4.png'

const BrandCreation=()=>{
    return(
        <>
        <section className="Brand-Creation">
        <div className="container-fluid">
            <div className="row justify-content-center">
                <div className="col-12 offset-md-1 col-md-3 mt-5 mb-5">
                    <img src={brandCreation} className="img-fluid" alt="BrandCreation"/>
                </div>
                <div className="col-12 col-md-6 mt-5">
                    <header className="mt-md-1 mt-md-4">
                        <h2><b>Brand Creation</b></h2>
                    </header>
                    <p className="fontsize-Brand-Creation">And because we work across every channel, our brands stand out
                        wherever
                        their customers are. On and offline. Globally and locally. Today and tomorrow.
                    </p>
                    <div className="row">
                        <div className="col-12 col-md-6 mt-5">
                            <img src={brandCreationicon1} className="img-fluid" alt="BrandCreation"/>
                            <header>
                                <h3 className="fontsize-icon-Brand-Creation">Strategy & Positioning</h3>
                            </header>
                            <p class="fontsize-Brand-Creation">We partner with ambitious businesses to define their most
                                compelling truths.
                            </p>
                        </div>
                        <div className="col-12 col-md-6 mt-5">
                            <img src={brandCreationicon2} class="img-fluid" alt="BrandCreation"/>
                            <header>
                                <h3 className="fontsize-icon-Brand-Creation">Brand Architecture</h3>
                            </header>
                            <p className="fontsize-Brand-Creation">We partner with ambitious businesses to define their most
                                compelling truths.
                            </p>
                        </div>
                        <div className="col-12 col-md-6 mt-5">
                            <img src={brandCreationicon3} class="img-fluid" alt="BrandCreation"/>
                            <header>
                                <h3 className="fontsize-icon-Brand-Creation">Identity & Design</h3>
                            </header>
                            <p className="fontsize-Brand-Creation">We partner with ambitious businesses to define their most
                                compelling truths.
                            </p>
                        </div>
                        <div className="col-12 col-md-6 mt-5">
                            <img src={brandCreationicon4} className="img-fluid" alt="BrandCreation"/>
                            <header>
                                <h3 className="fontsize-icon-Brand-Creation">Print & Packaging</h3>
                            </header>
                            <p classname="fontsize-Brand-Creation">We partner with ambitious businesses to define their most
                                compelling truths.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
        </>

    )
}
 export default BrandCreation;