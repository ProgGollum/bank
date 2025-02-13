import React from 'react';
import Link from "next/link";
import Image from "next/image";
import facebook from "@/images/facebook.svg";
import twitter from "@/images/twitter.svg";
import In from "@/images/In.svg";
import s from "../../styles/FooterSocial.module.css"

const FooterSocial = () => {
    return (
        <section>
            <div className="container">
                <div className={s.socialInner}>
                    <ul className={s.socialIcons}>
                        <li>
                            <Link href={"#!"}>
                                <Image src={facebook} alt={""}/>
                            </Link>
                        </li>
                        <li>
                            <Link href={"#!"}>
                                <Image src={twitter} alt={""}/>
                            </Link>
                        </li>
                        <li>
                            <Link href={"#!"}>
                                <Image src={In} alt={""}/>
                            </Link>
                        </li>
                    </ul>
                    <p className={s.socialText}>YourBank All Rights Reserved</p>
                    <div>
                        <Link className={s.socialText} href={"#!"}>Privacy Policy |</Link>
                        <Link className={s.socialText} href={"#!"}> Terms of Service</Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FooterSocial;