import python from './python.png'

export default function Preview2(){
    return(
        <div className="col-lg-4">
            <a href={"/blog/"+1} style={{textDecoration: "none"}}>
                <img className='img-fluid rounded-top-4' src={python} alt="python" />
                <div className='p-2'>
                    <h5 style={{color: "red"}}>Spanish</h5> 
                    <h4 style={{color: 'black'}}>Python: Razones por las que Todos Deberíamos Dominar este Lenguaje de Programación</h4>
                    <p style={{color: 'black'}}>
                    En la era digital en la que vivimos, la programación se ha convertido en una habilidad esencial en prácticamente todos los campos profesionales. Dentro del vasto paisaje de lenguajes de programación, uno se destaca por su versatilidad, simplicidad y potencial ilimitado: Python
                    </p>
                </div>
            </a>
        </div>
    )
}