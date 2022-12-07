import bgImage from '../assets/dallycpxm.png';

const frontPageImageStyle = { 
  //  height: 'auto', 
 //   maxWidth: '100%',
}


export const FrontPageImage = () => {
  return (
    <img src={bgImage} className='imagenPortada rounded' style={ frontPageImageStyle } ></img>
  )
}
