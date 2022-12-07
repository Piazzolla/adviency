import { PresentList } from '../components/PresentList';
import { FrontPageImage } from '../components/FrontPageImage';


export const FrontPage = () => {
    return (
        <>
            <div className='container-fluid align-middle' >
                <div className='row' >

                    <div className='col' >
                        <FrontPageImage />
                    </div>

                    <div className='regalos rounded col'>
                        <h1 className='mb-5'>
                            Regalos!
                        </h1>
                        <PresentList />
                    </div>
                </div>
            </div>
        </>
    )
}
