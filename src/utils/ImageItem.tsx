
import { AdvancedImage } from '@cloudinary/react';
import { CloudinaryImageKey, cloudinaryImages } from './Imagebank';

interface CloudinaryImageProps {
  imageKey: CloudinaryImageKey;
  className?: string;
  alt?: string;
}

const CloudinaryImage = ({ imageKey, className, alt }: CloudinaryImageProps) => {
  const img = cloudinaryImages[imageKey];
  return <AdvancedImage cldImg={img} className={className} alt={alt} />;
};

export default CloudinaryImage;