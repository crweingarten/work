
import './work.css'
import Name from './pages/Name'
import Contact from './pages/Contact'
import Work from './pages/Work'
import Fade from 'react-reveal/Fade'
import 'bootstrap/dist/css/bootstrap.min.css'
// import {BrowserRouter} from "react-router-dom"





function App() {

  return (
    <div>
    <Name/>
    <Fade bottom><div className="home-ital-sm pad" align="center"><span>↓</span></div></Fade>
    <Fade bottom><Work /></Fade>
    <Contact/>
    </div>  );
}



export default App;
