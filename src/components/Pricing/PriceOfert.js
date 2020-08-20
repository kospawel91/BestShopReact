import React from 'react';
import priceList from './priceOfertList'





const PlanPrice =({price})=>{
    return(
        <div className="pricing-tag">{price}</div>
    )
}
const PlanTitle = ({title}) => {
    return (
        <div className="pricing-name">
            {title}
        </div>
    );
};

const PlanLO = ({ofert}) =>{
    return (
        <div className="pricing-limited_ofert">{ofert}</div>
    )
}

const PlanList =({list}) =>{
    
    return (
        <ul className="pricing-list">
            <PriceItem list={list}/>
        </ul>
    )
}
const PriceItem = ({list=[]}) =>{
    return(
        <>
            {list.map((el =>
                <li key={el} className ="lista"  >{el}</li>))}
        </>
    )
}


const PriceButton =()=>{
    return(
        <button className="pricing-button">Begin</button>
    )
}


const nowy =  priceList.map(({ title, price, limitedOfert,list})=>{
    return (
        <div className={`${title} pricing__body`}>
            <div className='pricing__container'>
                <div className= "pricing-container">
            <PlanTitle title={title}/>
            <PlanPrice price={price}/>
            <PlanLO ofert={limitedOfert}/>
        </div>
        <PlanList list={list}/>
        </div>
        <PriceButton/>
    </div>)
}) 




const PriceOfert = () => {
    return (
        <>
        <h1 className="pricing-title">Pricing</h1>
        {nowy}
        </>
    );
};






export default PriceOfert;