import './purpleBox.css'
const PurpleBox = () => {
    return (
        <>
            <div className="col-12 col-md-6 mt-2 p-md-2 p-0">
                <div className="center_gallery_purple">
                    <div className=" row d-flex flex-column p-0">
                        <div className="offset-1 mt-3">
                            <a href="https://www.google.com/">
                                <b className="text-light">read more</b>
                            </a>
                        </div>
                        <div className="offset-1 mb-3">
                            <a
                                href="https://www.google.com/"
                                className="btn bg-light btn-sm btn_read_size"
                            ></a>
                        </div>
                    </div>
                    <div className="row offset-1 my-4">
                        <h3 className="text-light">Building brands with substance</h3>
                    </div>
                </div>
            </div>

        </>
    );
};
export default PurpleBox;