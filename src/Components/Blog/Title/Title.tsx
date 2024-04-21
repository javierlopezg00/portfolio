import title from './title.png'

export default function Title(){

    return(
        <div className="row d-flex justify-content-center m-4">
                <div className="col-lg-10 d-flex justify-content-center rounded">
                    <img className='img-fluid rounded-5' src={title} alt="" />
                </div>
        </div>
    )
}