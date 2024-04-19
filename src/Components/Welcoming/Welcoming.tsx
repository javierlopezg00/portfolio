import './Welcoming.css'
import mainTitle from './../../assets/main-title/1.svg'
import retroTab from './../../assets/retro-tab.svg'
import retroTab1 from './../../assets/retro-tab1.svg'

import whale1 from './../../assets/Whale/1.svg'
import hula1 from './../../assets/HulaHula/1.svg'
import whale2 from './../../assets/Whale/2.svg'
import hula2 from './../../assets/HulaHula/2.svg'
import WelcomingStructure from '../WelcomingStructure/WelcomingStructure'

import responsiveTitle from './../../assets/Responsive/responsive-title.svg'

/*
<WelcomingStructure retroTab={retroTab} mainTitle={mainTitle} whale={whale1} hula={hula1}/>
*/

export default function Welcoming(){

    return(
        <div>
            <div className='welcoming-container'>
                <div className='pink'>
                    <WelcomingStructure retroTab={retroTab} mainTitle="" subtitle='.' whale={whale2} hula={hula2}/>
                </div>
                <div className='black'>
                    <WelcomingStructure retroTab={retroTab1} mainTitle={mainTitle} subtitle='software developer + engineer' whale={whale1} hula={hula1}/>
                </div>
            </div>
            <div className='responsive-view'>
                <img className='responsive-title' src={responsiveTitle} alt="title" />
                <img className='responsive-whale' src={whale1} alt="" />
                <img className='responsive-whale2' src={whale1} alt="" />
            </div>
        </div>
    )
}