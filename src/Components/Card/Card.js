import React from "react";
import style from './Card.module.css'
import useSplitCardNumber from "../../Hooks/useSplitCardNumber";

export default function Card(props) {

    console.log(props)
    return (
        <div className={`${style.cardContainer} border h-52 w-screen`} style={{ backgroundImage: `url(${props.bcLogo})` }}>
            <div className={`${style.bankTitle}`}>
                {props.bankTitle}
            </div>
            <div className={`${style.bankLogo} `}>
                <img src={props.bankLogo} alt="" />
            </div>
            <div className={`${style.cardNumber} text-black text-3xl `}>
                {useSplitCardNumber(props.cardNum)}
            </div>
            <div className={`${style.expireDate} text-white text-xl`}>
                <span>{props.expireMonth}</span>
                <span>/</span>
                <span>{props.expireYear}</span>
            </div>
        </div >
    )
}
