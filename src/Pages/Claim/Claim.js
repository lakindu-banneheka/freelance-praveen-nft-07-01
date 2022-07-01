import React from 'react';
import Header from '../../components/Header/Header';
import './Claim.css';

const Claim = ({ setRoute, route }) => {

    const onClickBtn = () => {
        console.log('onClick claim')
    }

    return (
        <div className='container' >
            <div className='header--wrap' > 
                <Header 
                    setRoute={setRoute}
                    route={route}
                />
            </div>
            <div className='body-container' >
            
                <div className='body-wrapper' >
                    <div className='value-container' >
                        <div className='number-wrapper' >
                            {10000}
                        </div>
                        <div className='rnm-wrapper' >
                            RNM
                        </div>
                    </div>
                    <div className='btn-wrapper' >
                        <button className='claim--btn' onClick={onClickBtn} >
                            CLAIM
                        </button>
                    </div>
                </div>
            </div>
        </div>
        
    );
};

export default Claim;