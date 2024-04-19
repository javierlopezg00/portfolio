import './WelcomingStructure.css'

export default function WelcomingStructure(props: {retroTab:string, mainTitle:string, subtitle: string,hula: string , whale: string}){
    
    return(
        <div className='first-container'>
            <div className='tab-text'>
                <img className='retro-tab-img' src={props.retroTab} alt="retro-tab" />
                <div className='main-text'>
                    <img className='main-title-img' src={props.mainTitle}/>
                    <h1 className='subtitle'>{props.subtitle}</h1>
                </div>
            </div>
            <img className="hula" src={props.hula} alt="hula" />
            <img className="whale" src={props.whale} alt="whale" />
        </div>
    )
}