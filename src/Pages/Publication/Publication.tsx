import python from './python.png'

export default function Publication(){

    const publication = {
        title: "Python: Razones por las que Todos Deberíamos Dominar este Lenguaje de Programación",
        img: python,
        content: <>
            <p>En la era digital en la que vivimos, la programación se ha convertido en una habilidad esencial en prácticamente todos los campos profesionales. Dentro del vasto paisaje de lenguajes de programación, uno se destaca por su versatilidad, simplicidad y potencial ilimitado: Python. En este artículo, exploraremos a fondo por qué todos deberíamos embarcarnos en el viaje de aprender y dominar Python, desde sus fundamentos hasta sus aplicaciones avanzadas en diversos campos.</p><h2>¿Qué Hace Especial a Python?</h2><p>
            Python es un lenguaje de programación de alto nivel, interpretado y multiparadigma que se destaca por su sintaxis clara y legible. Desde su creación a principios de los años 90 por Guido van Rossum, Python ha ganado popularidad y se ha convertido en uno de los lenguajes de programación más utilizados en todo el mundo. ¿Pero qué es lo que hace que Python sea tan especial?
            </p>
            <ul>
                <li>
                    Sintaxis: La sintaxis simple y legible de Python hace que sea fácil de aprender y comprender para principiantes, mientras que su estructura intuitiva facilita la escritura de código limpio y mantenible.
                </li>
                <li>
                    Sintaxis: La sintaxis simple y legible de Python hace que sea fácil de aprender y comprender para principiantes, mientras que su estructura intuitiva facilita la escritura de código limpio y mantenible.
                </li>
                <li>
                    Sintaxis: La sintaxis simple y legible de Python hace que sea fácil de aprender y comprender para principiantes, mientras que su estructura intuitiva facilita la escritura de código limpio y mantenible.
                </li>
                <li>
                    Sintaxis: La sintaxis simple y legible de Python hace que sea fácil de aprender y comprender para principiantes, mientras que su estructura intuitiva facilita la escritura de código limpio y mantenible.
                </li>
            </ul>
            </>
                    
    }

    return(
        <div className="container mt-5">
            <div className="row d-flex justify-content-center">
                <div className="col-lg-8">
                    <img src={publication.img} className='img-fluid' alt="" />
                </div>
            </div>
            <div className="row d-flex justify-content-center mt-5">
                <div className="col-lg-8">
                    <h1>{publication.title}</h1>
                </div>
            </div>
            <div className="row d-flex justify-content-center fs-3 mt-4">
                <div className="col-lg-8">
                    {publication.content}
                </div>
            </div>
        </div>
    )
}