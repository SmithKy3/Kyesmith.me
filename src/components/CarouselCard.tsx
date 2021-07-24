import React from 'react';

interface CarouselCardProps {
    width: number;
    padding: number;
}

export const CarouselCard: React.FC<CarouselCardProps> = (props) => {
    return (
        <div className="carousel-card-container" style={{ width: `${props.width}px`, padding: `0 ${props.padding}px` }}>
            { props.children }
        </div>
    );
}