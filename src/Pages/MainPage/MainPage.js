import React, { useContext, useEffect, useState } from "react";
import Card from "../../Components/Card/Card";
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import style from './MainPage.module.css'
import { useDispatch, useSelector } from "react-redux";
import { userContext } from "../../Context/usersContext";

export default function MainPage() {

    const userData = useContext(userContext)
    const accounts = userData[0].account

    let [currntCard, setCurrentCard] = useState(0)

    const nextCardHandler = () => {
        if (currntCard < accounts.length - 1) {
            setCurrentCard(prevState => prevState + 1)
        } else if (currntCard === accounts.length - 1) {
            setCurrentCard(0)
        }
    }
    const prevCardHandler = () => {
        if (currntCard > 0) {
            setCurrentCard(prevState => prevState - 1)
        } else if (currntCard === 0) {
            setCurrentCard(accounts.length - 1)
        }
    }



    return (
        <div className={`${style.mainPageContainer} w-full h-full`}>
            <div className=" flex items-center px-5 py-4 justify-center">
                <button onClick={nextCardHandler} className="text-gray-700 bg-gray-300 rounded-full mx-2 p-2">{<FiChevronLeft />}</button>
                <div className={`${style.cards} relative flex max-w-[90%]  `}>
                    {/* {accounts.map(acc => (
                        <Card key={acc.bankId} {...acc} />
                    ))} */}
                    <Card {...accounts[currntCard]} />
                </div>
                <button onClick={prevCardHandler} className="text-gray-700 bg-gray-300 rounded-full mx-2 p-2">{<FiChevronRight />}</button>
            </div>
            <div>KOSSHER</div>


        </div>
    )
}
