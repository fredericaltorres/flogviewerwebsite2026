'use client';

import { useState } from 'react';
import Image from 'next/image';
import ImageModal from './ImageModal';

interface ClickableImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  fill?: boolean;
}

export default function ClickableImage({ 
  src, 
  alt, 
  width, 
  height, 
  className = '', 
  fill = false 
}: ClickableImageProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <span>
      <span 
        className={`relative cursor-pointer ${className}`}
        onClick={() => setIsModalOpen(true)}
        style={!fill ? { width, height } : undefined}
      >
          <img
          src={src}
          alt={alt}
          
          width={!fill ? width : undefined}
          height={!fill ? height : undefined}
          className={`${fill ? 'object-contain' : ''} ${className}`}
        />

      </span>

      <ImageModal src={src} alt={alt} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}/>
    </span>
  );
} 