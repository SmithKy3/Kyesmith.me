import React from 'react';
import styled from 'styled-components';

export const StyledImage = styled.img`
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
