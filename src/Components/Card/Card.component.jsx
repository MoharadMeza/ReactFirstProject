import Header from '../HeaderCard/Header.component'
import cardImageright from '../../images/pexelsphoto818650.jpeg'
import cardImageleft from '../../images/pexelsphoto1071162.jpeg'
import Readmore from '../Readmore/Readmore.component'
import './Card.css'
const Card = () => {
    return (
        <>
            <div className="card_center p-0">
                <div className="container p-0">
                    <Header />
                    <div className="row p-0 pb-5">
                        <div className="col-6 col-md-6 col-sm-12 p-0">
                            <div className="row p-0">
                                <div className="col-12">
                                    <img
                                        src={cardImageleft}
                                        className="card_center_image_left"
                                        alt="5_image"
                                    />
                                </div>
                                <div className="col-12 mt-3">
                                    <p className="mt-3">
                                        The future of UX / UI is complex, and our partners rely on us
                                        to help them simplify it. We design websites, applications,
                                        and digital products that build modern brands and form
                                        authentic relationships.
                </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 col-md-6 col-sm-12 p-0">
                            <div className="row m-0 p-0">
                                <div className="col-12">
                                    <img
                                        src={cardImageright}
                                        className="card_center_image_right"
                                        alt="6_image"
                                    />
                                </div>
                                <div className="col-12 pt-5">
                                    <p>
                                        Our UX approach is based on this principle: experiences that
                                        people enjoy form the strongest connections between a brand
                                        and its audience. Our process always starts with our user, and
                                        through strategic design we craft systems that surprise and
                                        delight while providing deeper relevance and greater value.
                </p>
                                </div>
                                <Readmore />

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Card;