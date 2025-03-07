import React from 'react';
import Image from "next/image";
import mail from "@/images/mail.svg";
import Link from "next/link";
import phone from "@/images/phone.svg";
import position from "@/images/position.svg";
import s from "../../styles/FooterContact.module.css";

const FooterContact = () => {
    return (
        <section className={s.contacts}>
            <div className="container">
                <div className={s.contactsInner}>
                    <ul className={s.contactsList}>
                        <li className={s.constactsItem}>
                            <Image src={mail} alt={""}/>
                            <Link className={s.contactsLink} href={"mailto:hello@skillbirdge.com"}>hello@skillbirdge.com</Link>
                        </li>
                        <li className={s.constactsItem}>
                            <Image src={phone} alt={""}/>
                            <Link className={s.contactsLink} href={"tel:+91 91813 23 2309"}>+91 91813 23 2309</Link>
                        </li>
                        <li className={s.constactsItem}>
                            <Image src={position} alt={""}/>
                            <Link className={s.contactsLink} target={"_blank"}
                                  href={"https://yandex.ru/maps/10393/london/?ll=-0.126499%2C51.508670&mode=whatshere&whatshere%5Bpoint%5D=-0.130094%2C51.508687&whatshere%5Bzoom%5D=17&z=17.51"}>Somewhere
                                in the World</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default FooterContact;