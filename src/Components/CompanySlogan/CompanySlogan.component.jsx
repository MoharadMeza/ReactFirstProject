import './CS.css'
import Images from '../Images/Images.component'
const CompanySlogan = () => {
    const CS =
        <div className="company-slogan">
            <div className="container">
                <div className="row px-3">
                    <div className="col col-12 col-md-6 pr-5">
                        <div className="third-readm mr-sm-5 mr-0 mb-5 py-5">
                            <div className="w-readm">
                                <a className="w-text text-light" href="#"><b> read more </b></a>

                                <div>
                                    <a href="#" className="bg-light btn btn-sm btn-end mb-5 w-100"></a>
                                </div>
                            </div>
                            <div className="text-light pl-3 mt-5 mb-3">
                                <h1>
                                    <b>
                                        We make the complex, simple
                            </b>
                                </h1>
                            </div>
                        </div>
                        <h5>
                            To stand out you need to stand for something meaningful.That’s why we start with the
                            substance.
                            We partner with ambitious businesses to define their most compelling truths. And we use them
                            to
                            create deeper, richer brands. Brands with the power to disrupt crowded categories through
                            integrity and purpose. And because we work across every channel, our brands stand out
                            wherever
                            their customers are. On and offline. Globally and locally. Today and tomorrow.
                </h5>
                        <h5>
                            What we do and why we hustle come from within. With our shared principles in place, we
                            create
                            without fear in an atmosphere that facilitates the greatest work for the greatest clients of
                            earth. Ambition. Talent. Love. Call it what you want. We call it Basic.
                </h5>

                    </div>
                    <div className="col-12 col-md-6">
                        <div className="row justify-content-center">
                            <Images/>
                            <Images/>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    return CS;
}
export default CompanySlogan;