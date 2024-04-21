import Preview from '../../Components/Blog/Preview/Preview'
import Preview2 from '../../Components/Blog/Preview2/Preview2'
import Title from '../../Components/Blog/Title/Title'


export default function Blog(){

    return(
        <div className="container">
            <Title />
            <Preview />
            <div className="row mt-4 mb-4">
                <Preview2 />
                <Preview2 />
                <Preview2 />
            </div>
        </div>
    )
}