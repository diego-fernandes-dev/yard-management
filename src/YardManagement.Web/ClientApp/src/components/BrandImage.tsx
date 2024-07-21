import React from 'react';

interface BrandImageProps {
  url: string;
  altText: string;
}

const BrandImage: React.FC<BrandImageProps> = ({ url, altText }) => {
  return (
    <div className="flex items-center justify-center p-4">
      <img src={url} alt={altText} className="h-12 w-auto" />
    </div>
  );
};

export default BrandImage;
