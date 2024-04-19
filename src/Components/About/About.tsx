import './About.css'
import myself from '../../assets/myself/1.svg'
import myself2 from '../../assets/myself/2.svg'
import helloStranger from '../../assets/helloStranger.svg'
import Line from '../Line/Line.svg'
import Saturno from '../Saturno/Saturno'


export default function About(){
/* 
<div className='about-me'>
                My name is Javier López, and I like to design all kinds of things. I specialize in UI/UX design and game development, often doing both at the same time. I have a passion for making beautiful interfaces with excellent usability. <br/><br/> As a wearer of many hats, my experience also includes graphic design, typography, scripting, video editing, and sometimes making art in the third dimension. I'm always curious and always learning... <br/> <br/> I'm a native Wisconsinite and certified lover of pineapple on pizza. I currently reside in Austin, Texas. I'm a co-founder of The Bread &amp; Butter Game Co. <br/> <br/>My mission as a game developer is to combine creative mechanics, aesthetics, and a whole lot of polish - all in the name of making genuinely charming experiences that never get in the way of the player's fun. <br/><br/> But most importantly, I never take myself too seriously.
                </div>
*/
    return(
            <div className='about-container' id="about">
                <img className='first-line' src={Line} alt="line" />

                <div className='about-images-container'>
                    <img className='hello-stranger' src={helloStranger} alt="hello" />
                    <div className='about-div'>
                        <img className='myself-img2' src={myself2} alt="tv" />
                        <img className='myself-img' src={myself} alt="tv" />
                    </div> 
                </div>
                <div className='about-me'>
                    <p>
                        My name is Javier López, and I enjoy crafting digital experiences across the full stack of web development. With expertise spanning frontend, backend, databases, cloud technologies, and Python programming, I thrive in bringing ideas to life through code. <br/> <br/>
                        I specialize in building intuitive user interfaces and robust backend systems, seamlessly integrating them to deliver cohesive and efficient solutions. Whether it's crafting responsive layouts, optimizing database queries, deploying scalable applications, or automating tasks with Python, I relish the challenge of solving complex problems and delivering high-quality software. <br/><br/>
                        Currently based in Guatemala, I've had the opportunity to work on diverse projects and collaborate with talented teams. Whether it's crafting pixel-perfect designs, architecting efficient databases, or deploying cloud-based solutions, I'm driven by a passion for excellence and a dedication to continuous improvement. <br/> <br/>
                    </p>
                    <div className='divider-line'></div>
                    <p className='diferent-p'>
                        My mission as a developer is to blend creativity, technical expertise, and a relentless pursuit of quality to create software solutions that inspire, empower, and delight users. <br/> <br/> 
                        But above all, I approach my work with humility and a sense of humor, never taking myself too seriously and always striving to learn and grow in this ever-evolving field.<br/><br/>
                    </p>
                </div>
                    <Saturno />
                <img className='line3' src={Line} alt="line" />
            </div>
    )
}