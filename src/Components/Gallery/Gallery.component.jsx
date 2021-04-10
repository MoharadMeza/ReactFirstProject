import leftImage from '../../images/1.PNG'
import firstImage from '../../images/2.PNG'
import secondImage from '../../images/3.PNG'
import thirdImage from '../../images/4.PNG'
import PurpleBox from '../purpleBox/purpleBox.component'
import './Gallery.css'
const Gallery = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="row  mb-3 p-0 center_gallery">
                    <div className="col-12 col-md-6 p-md-2 p-0">
                        <img
                            src={leftImage}
                            className="img-fluid p-0 center_gallery_left"
                            alt="1_image"
                        />
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="row">
                            <div className="col-12 col-md-6 p-md-2 p-0 ">
                                <img
                                    src={firstImage}
                                    className="img-fluid center_gallery_right"
                                    alt="2_image"
                                />
                            </div>
                            <div className="col-12 col-md-6 p-md-2 p-0">
                                <img
                                    src={secondImage}
                                    className="img-fluid center_gallery_right"
                                    alt="3_image"
                                />
                            </div>

                            <PurpleBox />
                            <div className="col-12 col-md-6 mt-2 p-md-2 p-0">
                                <img
                                    src={thirdImage}
                                    className="img-fluid center_gallery_right"
                                    alt="4_image"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

};
export default Gallery;
