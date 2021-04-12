import './images.css'
import a from "../../images/pexelsphoto1543895.jpeg"
import img1 from '../../images/Justin_Autograph.png'
import img2 from '../../images/pexelsphoto818650.jpeg'
const Images = (props) => {
    return (
        <>
            <div className="images">
                <img className="happy-girl load-image" src={a} alt="happy"></img>
            </div>
            <div className="images text-center">
                <img src={img1} alt="signature" className="w-75 load-image mb-5"></img>
            </div>
            <div className="images">
                <img src={img2} alt="coffe" className="coffee-img load-image mt-5"></img>
            </div>
        </>
    )
}
export default Images;