import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

export const StyledImage = styled(Image)`
  width: 100%;
  height: auto;
  margin: 0 auto;
`;

interface EasyImageProps {
  className: string;
  imgFileName: string;
}

export const EasyImage: React.FC<EasyImageProps> = ({
  className,
  imgFileName,
}) => {
  return <StyledImage src={`/img/${imgFileName}`} className={className} />;
};
