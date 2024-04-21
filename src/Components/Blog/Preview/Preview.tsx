import image from './python.png'

export default function Preview(){

    return(
        <a className='d-flex' href={"/blog/"+1} style={{textDecoration: "none"}}>
            <div className="row d-flex justify-content-center">
                    <div className="col-lg-4 ">
                        <img src={image} className='img-fluid rounded-start-4' alt="" />
                    </div>
                    <div className="col-lg-8 p-3">
                        <h5 style={{color: 'red'}}>Spanish</h5> 
                        <h4 style={{color: 'black'}}>Python: Razones por las que Todos Deberíamos Dominar este Lenguaje de Programación</h4>
                        <p style={{color: 'black'}}>En la era digital en la que vivimos, la programación se ha convertido en una habilidad esencial en prácticamente todos los campos profesionales. Dentro del vasto paisaje de lenguajes de programación, uno se destaca por su versatilidad, simplicidad y potencial ilimitado: Python</p>       
                    </div>
            </div>
        </a>
    )
}