import React from 'react';

interface ImageDisplayProps {
  src: string;          // URL da imagem
  alt?: string;        // Texto alternativo da imagem
  shape?: 'circle' | 'square' | 'rounded'; // Formato da imagem
  size?: number;       // Tamanho da imagem em pixels
}

const ImageDisplay: React.FC<ImageDisplayProps> = ({
  src,
  alt = 'Imagem',
  shape = 'rounded',
  size = 100, // Tamanho padrão
}) => {
  const styles: React.CSSProperties = {
    width: `${size}px`,
    height: `${size}px`,
    borderRadius: shape === 'circle' ? '50%' : shape === 'rounded' ? '15%' : '0',
    objectFit: 'cover', // Para cobrir o espaço e manter a proporção
    backgroundColor:'transparent'
  };

  return <img src={src} alt={alt} style={styles} />;
};

export default ImageDisplay;
