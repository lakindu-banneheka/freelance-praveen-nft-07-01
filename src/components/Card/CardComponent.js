import React from 'react';
import './Card.css';
import { IoCheckmarkCircle } from "react-icons/io5";


const CardComponent = ({image, id, selectedId, setSelectedId}) => {

    const onClickCard = () => {
        console.log('onclick card', id)
        setSelectedId(id);
    }

    return (
        <div className='card-wrapper' onClick={onClickCard} >
            {/* <div className='img' /> */}
            <img src={image} alt='img' className='image' />
            { selectedId ? ( selectedId === id
                        ?<div className="select-container">
                            <span className="selected-icon-container">
                                <IoCheckmarkCircle className='selected-icon' />
                            </span>
                            <span className="selected-hover">
                                {`Selected: ${selectedId}`}
                            </span>
                        </div>
                        : <></>
                    ) : <></>
                }
        </div>
    );
};

export default CardComponent;