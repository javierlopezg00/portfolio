import './Header.css'
import github from '../../assets/icons/github.svg'
import linkedin from '../../assets/icons/linkedin.svg'
import email from '../../assets/icons/email.png'
import triangle from '../../assets/icons/triangle.png'
import line from './../../Components/Line/Line.svg'
import { useState } from 'react'

export default function Header(){

    const [isOpen, setIsOpen] = useState(true);

    return(
        <div className='header'>
            <nav className='nav'>
            <a className='nav-words' 
                    href="">blog</a>
                <a className='nav-words' 
                    href="#about">about</a>
                <a className='nav-words'
                    href="https://drive.google.com/file/d/1eLatE1tjDrbmHSA2Sf8ZKa4aWpFPAOSv/view?usp=sharing"
                    target='_blank' >resume</a>
                    
                
                <a title='LinkedIn' target='_blank' href="https://www.linkedin.com/in/javier-lópez-guzmán-211831236/">
                    <img className='icon' src={linkedin} alt="LinkedIn" />
                </a>
                <a title='Github' target='_blank' href="https://github.com/javierlopezg00">
                    <img className='icon' src={github} alt="Github" />
                </a>
                <a title='Email' target='_blank' href="mailto:javierlopezguzman00@gmail.com">
                    <img className='icon' src={email} alt="Email" />
                </a>
            </nav>

            { isOpen ? 
                <div className='responsive-menu'>
                    <a className='nav-words'href="">
                        Blog
                    </a>
                    <a className='nav-words' href="#about">
                        About
                    </a>
                    <a className='nav-words'
                        href="https://drive.google.com/file/d/1eLatE1tjDrbmHSA2Sf8ZKa4aWpFPAOSv/view?usp=sharing"
                        target='_blank' >Resume
                    </a>

                    <a className='nav-words' target='_blank' href="https://www.linkedin.com/in/javier-lópez-guzmán-211831236/">
                        Linkedin
                    </a>
                    <a className='nav-words' target='_blank' href="https://github.com/javierlopezg00">
                        Github
                    </a>
                    <a className='nav-words' target='_blank' href="mailto:javierlopezguzman00@gmail.com">
                        Email
                    </a>
                    <img className='invrese-triangle' src={triangle} onClick={()=> setIsOpen(state => !state)}/>
                    <img className='responsive-header-line' src={line} />
                </div>
            :   <div className='responsive-menu1'>
                    <img src={triangle} onClick={()=> setIsOpen(state => !state)}/>
                </div>
            } 
            

            
        </div>
    )
}