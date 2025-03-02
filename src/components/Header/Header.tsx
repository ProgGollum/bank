"use client"

import React, {useState} from 'react';
import Link from "next/link";
import Image from "next/image";
import logo from "@/images/logo.svg";
import Navbar from "@/components/Navbar/Navbar";
import Menu from "@/components/Menu/Menu";

const Header = () => {

    const pages = [
        {id: 1, value: "Home", href: "/"},
        {id: 2, value: "Careers", href: "/careers"},
        {id: 3, value: "About", href: "/about"},
        {id: 4, value: "Security", href: "/security"}
    ]

    const [menuActive, setMenuActive] = useState<boolean>(false)

    return (
        <header className="header">
            <div className="container">
                <div className="header__inner">
                    <Link className="header__logo" href="/">
                        <Image src={logo} alt=""/>
                    </Link>
                    <Navbar/>
                    <div className="buttons">
                        <Link href="" className="signup">Sign Up</Link>
                        <Link href="" className="login">Login</Link>
                    </div>
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