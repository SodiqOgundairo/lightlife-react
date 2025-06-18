
import { Cloudinary } from '@cloudinary/url-gen';
import { auto } from '@cloudinary/url-gen/actions/resize';
import { autoGravity } from '@cloudinary/url-gen/qualifiers/gravity';
import { AdvancedImage } from '@cloudinary/react';

const Images = () => {
  const cld = new Cloudinary({ cloud: { cloudName: 'dmxfjy079' } });
  
  // Use this sample image or upload your own via the Media Explorer
  const img = cld
        .image('cld-sample-5')
        .format('auto') // Optimize delivery by resizing and applying auto-format and auto-quality
        .quality('auto')
        .resize(auto().gravity(autoGravity()).width(500).height(500)); // Transform the image: auto-crop to square aspect_ratio

  return (<AdvancedImage cldImg={img}/>);
};

export default Images



// import {Cloudinary} from "@cloudinary/url-gen";

// // Create and configure your Cloudinary instance.
// const cld = new Cloudinary({
//   cloud: {
//     cloudName: 'demo'
//   }
// }); 

// // Instantiate a CloudinaryImage object for the image with public ID, 'sample'.
// const myImage = cld.image('cld-sample-5');

// // Return the delivery URL
// const myUrl = myImage.toURL();