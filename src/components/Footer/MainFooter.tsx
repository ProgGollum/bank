import React from 'react';
import Link from "next/link";
import Image from "next/image";
import logo from "@/images/footerLogo.svg";
import Navbar from "@/components/Navbar/Navbar";
import s from "../../styles/MainFooter.module.css"

const MainFooter = () => {
    return (
        <section className={s.footerMain}>
            <div className="container">
                <Link className={s.footerLogo} href="/">
                    <Image src={logo} alt=""/>
                </Link>
                <Navbar justifyContent={"center"} display={"flex"} color={"#E4E4E7"}/>
            </div>
        </section>
    );
};

export default MainFooter;