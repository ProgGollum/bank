import React from 'react';
import Link from "next/link";
import Image from "next/image";
import logo from "@/images/logo.svg";
import Navbar from "@/components/Navbar/Navbar";

const Header = () => {
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
                </div>
            </div>
        </header>
    );
};

export default Header;