import AgancyBrand from '../AgancyBrand/AgancyBrand.component'
import Teamwork from '../Teamwork/Teamwork.component'
import CompanySlogan from '../CompanySlogan/CompanySlogan.component'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
const App = ()=>{
    const app = <>
    <AgancyBrand/>
    <Teamwork image='pexelsphoto1543895.jpeg'/>
    <CompanySlogan/>
    </>
    return app;
    
}
export default App;