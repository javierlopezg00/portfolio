import './Saturno.css'
import saturno1 from '../../assets/saturno/1.svg'
import saturno2 from '../../assets/saturno/2.svg'

export default function Saturno(){
    return(
        <div className='saturnos'>
            <div className='both-saturno-container'>
                <div className='saturno-container'>
                    <img className='saturno-img' src={saturno2} alt="saturno" />
                    <img className='saturno-img' src={saturno2} alt="saturno" />
                    <img className='saturno-img' src={saturno2} alt="saturno" />
                </div>
                <div className='saturno-container2'>
                    <img className='saturno-img2' src={saturno1} alt="saturno" />
                    <img className='saturno-img2' src={saturno1} alt="saturno" />
                    <img className='saturno-img2' src={saturno1} alt="saturno" />
                </div>
            </div>
        </div>
    )
}