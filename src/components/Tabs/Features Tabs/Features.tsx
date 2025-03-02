'use client'

import {FC, useState} from 'react';
import {Tabs} from '@mantine/core';
import s from "../../../styles/Features.module.css"
import classNames from "classnames";
import {MdArrowOutward} from "react-icons/md";

const Features: FC = () => {
    const [activeTab, setActiveTab] = useState<string | null>('first');

    return (
        <section className={s.features}>
            <div className="container">
                <h2 className="sectionTitle">Our <span>Features</span></h2>
                <p className={s.features__info}>
                    Experience a host of powerful features at YourBank, including seamless online banking, secure
                    transactions, and
                    personalized financial insights, all designed to enhance your banking experience
                </p>
                <Tabs variant="pills" radius="lg" orientation="vertical" value={activeTab} onChange={setActiveTab}>
                    <Tabs.List className={s.features__tabulation}>
                        <Tabs.Tab value="first"
                                  className={classNames(s.features__tabulation_button, activeTab === "first" ? s.button__active : {})}>Online
                            Banking</Tabs.Tab>
                        <Tabs.Tab value="second"
                                  className={classNames(s.features__tabulation_button, activeTab === "second" ? s.button__active : {})}>Financial
                            Tools</Tabs.Tab>
                        <Tabs.Tab value="third"
                                  className={classNames(s.features__tabulation_button, activeTab === "third" ? s.button__active : {})}>Customer
                            Support</Tabs.Tab>
                    </Tabs.List>

                    <Tabs.Panel value="first">
                        <ul className={s.features__cards}>
                            <li className={s.features__card}>
                                <div className={s.features__card_name}>
                                    <h3 className={s.features__card_title}>24/7 Account Access</h3>
                                    <MdArrowOutward className={s.features__card_icon} color={"#CAFF33"}/>
                                </div>
                                <p className={s.features__card_text}>
                                    Enjoy the convenience of accessing your accounts anytime, anywhere through our
                                    secure online banking platform. Check
                                    balances, transfer funds, and pay bills with ease.
                                </p>
                            </li>
                            <li className={s.features__card}>
                                <div className={s.features__card_name}>
                                    <h3 className={s.features__card_title}>Mobile Banking App</h3>
                                    <MdArrowOutward className={s.features__card_icon} color={"#CAFF33"}/>
                                </div>
                                <p className={s.features__card_text}>
                                    Stay connected to your finances on the go with our user-friendly mobile banking app.
                                    Easily manage your accounts,
                                    deposit checks, and make payments from your smartphone or tablet.
                                </p>
                            </li>
                            <li className={s.features__card}>
                                <div className={s.features__card_name}>
                                    <h3 className={s.features__card_title}>Secure Transactions</h3>
                                    <MdArrowOutward className={s.features__card_icon} color={"#CAFF33"}/>
                                </div>
                                <p className={s.features__card_text}>
                                    Rest assured knowing that your transactions are protected by industry-leading
                                    security measures. We employ encryption
                                    and multi-factor authentication to safeguard your financial information.
                                </p>
                            </li>
                            <li className={s.features__card}>
                                <div className={s.features__card_name}>
                                    <h3 className={s.features__card_title}>Bill Pay and Transfers</h3>
                                    <MdArrowOutward className={s.features__card_icon} color={"#CAFF33"}/>
                                </div>
                                <p className={s.features__card_text}>
                                    Save time and avoid late fees with our convenient bill pay service. Set up recurring
                                    payments or make one-time transfers
                                    between your accounts with just a few clicks.
                                </p>
                            </li>
                        </ul>
                    </Tabs.Panel>
                    <Tabs.Panel value="second">
                        <ul className={s.features__cards}>
                            <li className={s.features__card}>
                                <div className={s.features__card_name}>
                                    <h3 className={s.features__card_title}>24/7 Account Access</h3>
                                    <MdArrowOutward className={s.features__card_icon} color={"#CAFF33"}/>
                                </div>
                                <p className={s.features__card_text}>
                                    Enjoy the convenience of accessing your accounts anytime, anywhere through our
                                    secure online banking platform. Check
                                    balances, transfer funds, and pay bills with ease.
                                </p>
                            </li>
                            <li className={s.features__card}>
                                <div className={s.features__card_name}>
                                    <h3 className={s.features__card_title}>Mobile Banking App</h3>
                                    <MdArrowOutward className={s.features__card_icon} color={"#CAFF33"}/>
                                </div>
                                <p className={s.features__card_text}>
                                    Stay connected to your finances on the go with our user-friendly mobile banking
                                    app. Easily manage your accounts,
                                    deposit checks, and make payments from your smartphone or tablet.
                                </p>
                            </li>
                            <li className={s.features__card}>
                                <div className={s.features__card_name}>
                                    <h3 className={s.features__card_title}>Secure Transactions</h3>
                                    <MdArrowOutward className={s.features__card_icon} color={"#CAFF33"}/>
                                </div>
                                <p className={s.features__card_text}>
                                    Rest assured knowing that your transactions are protected by industry-leading
                                    security measures. We employ encryption
                                    and multi-factor authentication to safeguard your financial information.
                                </p>
                            </li>
                        </ul>
                    </Tabs.Panel>
                    <Tabs.Panel value="third">
                        <ul className={s.features__cards}>
                            <li className={s.features__card}>
                                <div className={s.features__card_name}>
                                    <h3 className={s.features__card_title}>24/7 Account Access</h3>
                                    <MdArrowOutward className={s.features__card_icon} color={"#CAFF33"}/>
                                </div>
                                <p className={s.features__card_text}>
                                    Enjoy the convenience of accessing your accounts anytime, anywhere through our
                                    secure online banking platform. Check
                                    balances, transfer funds, and pay bills with ease.
                                </p>
                            </li>
                            <li className={s.features__card}>
                                <div className={s.features__card_name}>
                                    <h3 className={s.features__card_title}>Mobile Banking App</h3>
                                    <MdArrowOutward className={s.features__card_icon} color={"#CAFF33"}/>
                                </div>
                                <p className={s.features__card_text}>
                                    Stay connected to your finances on the go with our user-friendly mobile banking
                                    app. Easily manage your accounts,
                                    deposit checks, and make payments from your smartphone or tablet.
                                </p>
                            </li>
                        </ul>
                    </Tabs.Panel>
                </Tabs>
            </div>
        </section>
    );
}

export default Features;