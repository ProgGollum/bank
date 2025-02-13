import React, {FC, useState} from 'react';
import Link from "next/link";
import s from "../../styles/Navbar.module.css"

interface NavbarProps {
    color?: string;
    display?: string;
    justifyContent?: string;
}

const Navbar:FC<NavbarProps> = ({color, justifyContent, display}) => {
    return (
        <nav style={{justifyContent, display}}>
            <ul className={s.navList}>
                <li>
                    <Link className={s.navItem} style={{color}} href="/">Home</Link>
                </li>
                <li>
                    <Link className={s.navItem} style={{color}} href="/careers">Careers</Link>
                </li>
                <li>
                    <Link className={s.navItem} style={{color}} href="/about">About</Link>
                </li>
                <li>
                    <Link className={s.navItem} style={{color}} href="/security">Security</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;