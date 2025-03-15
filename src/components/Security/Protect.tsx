import React from 'react';
import s from "../../styles/security/Protect.module.scss"

import Image from "next/image"
import {TbAppsFilled} from "react-icons/tb";
import {IoIosApps} from "react-icons/io";
import {BsStars} from "react-icons/bs";
import {RiSecurePaymentFill} from "react-icons/ri";

const Protect = () => {
    return (
        <section className={s.protect}>
            <div className="container">
                <h2 className="sectionTitle">How We <span>Protect You</span></h2>
                <p className={s.protect__info}>
                    At YourBank, we prioritize the security and confidentiality of your financial information.
                    Our state-of-the-art encryption technology and stringent data protection measures ensure your assets
                    and transactions are safeguarded at all times
                </p>
                <ul className={s.protect__list}>
                    <li className={s.protect__item}>
                        <div className={s.protect__item_name}>
                            <div className={s.name__img}>
                                <TbAppsFilled className={s.name__img_icon}/>
                            </div>
                            <p className={s.name__title}>Secure Online Banking Platform</p>
                        </div>
                        <p className={s.protect__item_text}>
                            Our online banking platform is built with multiple layers of security to safeguard your
                            information.
                            We utilize industry-standard encryption protocols to ensure that your data remains
                            confidential and
                            protected during transmission.
                        </p>
                    </li>
                    <li className={s.protect__item}>
                        <div className={s.protect__item_name}>
                            <div className={s.name__img}>
                                <IoIosApps className={s.name__img_icon}/>
                            </div>
                            <p className={s.name__title}>Multi-Factor Authentication</p>
                        </div>
                        <p className={s.protect__item_text}>
                            To enhance the security of your online banking experience, we employ multi-factor
                            authentication.
                            This additional layer of security requires you to provide multiple pieces of identification,
                            such as
                            a password and a one-time verification code, to access your account.
                        </p>
                    </li>
                    <li className={s.protect__item}>
                        <div className={s.protect__item_name}>
                            <div className={s.name__img}>
                                <BsStars className={s.name__img_icon}/>
                            </div>
                            <p className={s.name__title}>Fraud Monitoring</p>
                        </div>
                        <p className={s.protect__item_text}>
                            We have sophisticated fraud detection systems in place to monitor your accounts for any
                            suspicious
                            activities. Our dedicated team works around the clock to detect and prevent unauthorized
                            transactions,
                            providing you with peace of mind.
                        </p>
                    </li>
                    <li className={s.protect__item}>
                        <div className={s.protect__item_name}>
                            <div className={s.name__img}>
                                <RiSecurePaymentFill className={s.name__img_icon}/>
                            </div>
                            <p className={s.name__title}>Secure Mobile Banking</p>
                        </div>
                        <p className={s.protect__item_text}>
                            Our mobile banking app is designed with the same level of security as our online banking
                            platform. You can confidently access your accounts, make transactions, and manage your
                            finances on the go, knowing that your information is protected.
                        </p>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default Protect;