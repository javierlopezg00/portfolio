import './Header.scss'
import github from '../../assets/icons/github.svg'
import linkedin from '../../assets/icons/linkedin.svg'
import email from '../../assets/icons/email.png'


export default function Header(){


    return(
        <nav className="navbar navbar-expand-md custom-navbar" style={{padding: "3%"}}> 
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
            </div>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav" style={{display: "flex", alignItems: "center"}}>
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/blog">Blog</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" target='_blank' href="https://drive.google.com/file/d/1eLatE1tjDrbmHSA2Sf8ZKa4aWpFPAOSv/view?usp=sharing">Resume</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/">About</a>
                    </li>
                    
                </ul>
            </div>
            <div className="collapse navbar-collapse" id="navbarNav" style={{marginLeft: "30px"}}>
                <a className="navbar-brand img-a" target='_blank' title='Github' href="https://github.com/javierlopezg00">
                    <img style={{ width: "50px", height: "50px" }} src={github} alt="Logo" width="30" height="24" className="d-inline-block align-text-top" />
                </a>
                <a className="navbar-brand" target='_blank' title='Linkedin' href="https://www.linkedin.com/in/javier-lópez-guzmán-211831236/">
                    <img style={{ width: "50px", height: "50px" }} src={linkedin} alt="Logo" width="30" height="24" className="d-inline-block align-text-top" />
                </a>
                <a className="navbar-brand" target='_blank' title='Email' href="mailto:javierlopezguzman00@gmail.com">
                    <img style={{ width: "50px", height: "50px" }} src={email} alt="Logo" width="30" height="24" className="d-inline-block align-text-top" />
                </a>
            </div>
        </nav>
    )
}