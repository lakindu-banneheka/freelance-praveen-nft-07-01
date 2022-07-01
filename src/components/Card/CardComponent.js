import React from 'react';
import './Card.css';

const CardComponent = ({image, id}) => {

    const onClickCard = () => {
        console.log('onclick card', id)
    }

    return (
        <div className='card-wrapper' onClick={onClickCard} >
            {/* <div className='img' /> */}
            <img src={image} alt='img' className='image' />
        </div>
    );
};

export default CardComponent;