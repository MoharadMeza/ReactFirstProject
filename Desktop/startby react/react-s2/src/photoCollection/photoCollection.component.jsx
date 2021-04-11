import photoCollectionone from '../photoCollection/imgsectionphotocollection/photoCollectionone.png'
import photoCollectiontwo from '../photoCollection/imgsectionphotocollection/photoCollectiontwo.png'
import photoCollectiontree from '../photoCollection/imgsectionphotocollection/photoCollectiontree.png'
import photoCollectionfour from '../photoCollection/imgsectionphotocollection/photoCollectionfour.png'

const PhotoCollection=() =>{
return(
    <>
        <section className="Photo-Collection">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 col-md-3 p-0">
                        <img src={photoCollectionone} className="img-fluid" alt="collection1"/>
                    </div>
                    <div className="col-12 col-md-3 p-0">
                        <img src={photoCollectiontwo} className="img-fluid" alt="collection2"/>
                    </div>
                    <div className="col-12 col-md-3 p-0">
                        <img src={photoCollectiontree} className="img-fluid" alt="collection3"/>
                    </div>
                    <div className="col-12 col-md-3 p-0">
                        <img src={photoCollectionfour} className="img-fluid" alt="collection3"/>
                    </div>
                </div>
            </div>
        </section>
    </>
    )
}
export default PhotoCollection;
