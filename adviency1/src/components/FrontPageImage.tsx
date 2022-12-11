import { Image } from "@nextui-org/react";
import imageArray from '../helpers/imageLoader'
import { useEffect, useState } from 'react';

const frontPageImageStyle = {
    //  height: 'auto', 
    //   maxWidth: '100%',
}


export const FrontPageImage = () => {

    const [actualImageIx, setActualImageIx] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            if (actualImageIx === imageArray.length - 1) {
                setActualImageIx(0);
            }
            else {
                setActualImageIx((prevImage) => prevImage + 1 )
            }
        }, 5000);

        return () => clearInterval(interval);

    }, [actualImageIx])


    return (
        <Image
            width={'70%'}
            
           // height={320}
            //scr={ bgImage }
            src={imageArray[actualImageIx]}
            alt=""
            objectFit='fill'
            showSkeleton={true}
            
            
            
        >

        </Image>
        //    <img src={bgImage} className='imagenPortada rounded' style={ frontPageImageStyle } ></img>
    )
}
