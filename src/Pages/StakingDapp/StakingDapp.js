import React, { useEffect, useState } from 'react';
import CardComponent from '../../components/Card/CardComponent';
import Header from '../../components/Header/Header';
import './StakingDapp.css';
import img_01 from '../../assets/images/img-1.png';
import { Routes } from '../../App';


const StakingDapp = ({ setRoute, route }) => {
    const [stake,setStake] =  useState([
        {image:img_01, id:'1'},
        {image:img_01, id:'3'},
        {image:img_01, id:'4'},
        {image:img_01, id:'5'},
        {image:img_01, id:'6'},
        {image:img_01, id:'7'},
        {image:img_01, id:'8'}
    ]);
    const [unstake,setUnstake] =  useState([
        {image:img_01, id:'12'},
        {image:img_01, id:'13'},
        {image:img_01, id:'14'},
        {image:img_01, id:'15'},
        {image:img_01, id:'16'},
        {image:img_01, id:'17'},
        {image:img_01, id:'18'}
    ]);
    const [cards,setCards] = useState([
        {image:img_01, id:'1'},
        {image:img_01, id:'2'},
        {image:img_01, id:'3'},
        {image:img_01, id:'4'},
        {image:img_01, id:'5'},
        {image:img_01, id:'6'},
        {image:img_01, id:'7'},
        {image:img_01, id:'8'},    
    ]);

    useEffect(() => {
        if(route === Routes.STAKE){
            setCards(stake);
        } else {
            setCards(unstake);
        }
    },[route, stake, unstake]);


    return (
        <div className='container' >
            <div className='header--wrap' > 
                <Header 
                    setRoute={setRoute}
                    route={route}
                />
            </div>
            <div className='grid-container' >
                { cards.map((card,i) => { 
                    return(
                        <div className='grid-item' key={i} >
                            <CardComponent image={card.image} id={card.id} />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default StakingDapp;