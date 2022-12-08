import { PresentList } from '../components/PresentList';
import { FrontPageImage } from '../components/FrontPageImage';
import { Text } from "@nextui-org/react";

export const FrontPage = () => {
    return (
        <>
            <div className='container w-100' >
                <Text h1
                    size={60}
                    css={{
                        textGradient: "45deg, $blue600 -20%, $pink600 50%",
                    }}
                    weight="bold"
                > NAKATOMI CORP WISHES YOU A </Text>
                <Text h1
                    size={60}
                    css={{
                        textGradient: "45deg, $blue600 -20%, $pink600 50%",
                    }}
                    weight="bold"
                > MERRY CHRISTMAS 2087 </Text>
                <div className='row h-100' >

                    <div className='col my-auto' >
                        <FrontPageImage />
                    </div>

                    <div className='regalos rounded col my-auto h-50'>
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
