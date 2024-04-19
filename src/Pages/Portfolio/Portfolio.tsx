import './Portfolo.css'
import About from "../../Components/About/About";
import Header from "../../Components/Header/Header";
import Pages from "../../Components/Pages/Pages";
import Welcoming from "../../Components/Welcoming/Welcoming";
import line from './../../Components/Line/Line.svg'


export default function Portfolio(){

    return(
        <div>
            <div className='main-container'>
                <Welcoming />
                <img className='line' src={line} alt="line" />  
            </div>
                <Pages />
            <About />
        </div>
    )
}