import * as React from 'react';
import styled from 'styled-components';

export const Img = styled.img`
    width: 100%;
    height: auto;
    margin: 0 auto;
`;

interface EasyImageProps {
    imgFileName: string;
    style: React.CSSProperties;
}

export const EasyImage: React.FC<EasyImageProps> = (props) => {
    const src = require(`@assets/images/${props.imgFileName}`);

    return (<Img src={src} style={props.style}/>);
}