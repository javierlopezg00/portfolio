import "./Screen.css"
import firstImage from '../../assets/1/1.svg'

export default function Screen(props: { link: string , title: string}){

    return(
        <a target='_blank' 
        href={props.link} 
        className="screen-container">
            <img className="screen-img" src={firstImage} alt="retro-tab" />
            <h2 className="screen-text">{props.title}</h2>
        </a>
    )
} 