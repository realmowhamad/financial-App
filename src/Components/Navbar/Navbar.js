import React, { useContext } from "react";
import style from './Navbar.module.css'
import { BsBellFill } from 'react-icons/bs'
import { HiOutlineMenuAlt3 } from 'react-icons/hi'
import { userContext } from "../../Context/usersContext";


export default function NavBar() {

    const userData = useContext(userContext)
    const user = userData[0]

    return (
        <div className=" flex items-center justify-center my-3" >
            <div className={`${style.navBarUserInfo} m-2 w-3/6 `}>
                <div className={`${style.navBarImage} flex items-center justify-center`}>
                    <div className={`${style.imageContainer}   `}>
                        <img src={user.userimage} alt="" className="rounded-full" />
                    </div>
                </div>
                <div className={`${style.navBarUserName} flex items-end justify-start px-2 text-gray-700`}>
                    {user.username}
                </div>
                <div className={`${style.navBarAcount} flex items-start justify-start px-2 text-gray-700`}>
                    Main Acount
                </div>

            </div>
            <div className={`${style.navBarIcons}  flex w-2/6 items-center justify-end text-2xl`}>
                <button className={`mx-2 text-gray-700`}>{<BsBellFill />}</button>
                <button className={`mx-2 text-gray-700`}>{<HiOutlineMenuAlt3 />}</button>
            </div>

        </div>
    )

}
