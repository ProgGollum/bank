"use client"

import React, {useState} from 'react';
import Link from "next/link";
import Image from "next/image";
import logo from "@/images/logo.svg";
import Navbar from "@/components/Navbar/Navbar";
import Menu from "@/components/Menu/Menu";

import { IoHomeOutline } from "react-icons/io5";
import { HiMiniPresentationChartLine } from "react-icons/hi2";
import { FaCircleExclamation } from "react-icons/fa6";
import { MdSecurity } from "react-icons/md";
import {useAuth} from "@/context/Authcontext";

const Header = () => {

    const pages = [
        {id: 1, value: "Home", href: "/", icon: <IoHomeOutline color="#CAFF33"/>},
        {id: 2, value: "Careers", href: "/careers", icon: <HiMiniPresentationChartLine color="#CAFF33"/>},
        {id: 3, value: "About", href: "/about", icon: <FaCircleExclamation color="#CAFF33"/>},
        {id: 4, value: "Security", href: "/security", icon: <MdSecurity color="#CAFF33"/>}
    ]

    const [menuActive, setMenuActive] = useState<boolean>(false)
    const isLogout = true;

    const auth = useAuth()


    return (
        <header className="header">
            <div className="container">
                <div className="header__inner">
                    <Link className="header__logo" href="/">
                        <Image src={logo} alt=""/>
                    </Link>
                    <Navbar/>
                    {!auth?.isAuth
                        ? <div className="buttons">
                            <Link href="/signup" className="signup">Sign Up</Link>
                            <Link href="/login" className="login">Login</Link>
                        </div>
                        :
                        <button
                            className="logout"
                            onClick={() => auth?.logout(isLogout)}
                        >
                            Logout
                        </button>
                    }

                    <div className="burger__btn" onClick={() => setMenuActive(!menuActive)}>
                        <span></span>
                    </div>
                    <Menu pages={pages} active={menuActive} setActive={() => setMenuActive}/>
                </div>
            </div>
        </header>
    );
};

export default Header;