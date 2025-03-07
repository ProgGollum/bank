'use client'

import React, {useState} from 'react';
import s from "../../../styles/Product.module.css"

import { IoBriefcase } from "react-icons/io5";

import classNames from "classnames";

const Product = () => {
    const [isActive, setIsActive] = useState<string>("individual")

    const toggleTab = (index:string) => {
        setIsActive(index);
    }

    return (
        <section className={s.product}>
            <div className="container">
                <h2 className="sectionTitle">Our <span>Products</span></h2>
                <div className={s.product__information}>
                    <p className={s.product__information_text}>
                        Discover a range of comprehensive and customizable banking products at YourBank,
                        designed to suit your unique financial
                        needs and aspirations
                    </p>
                    <div className={s.tabs}>
                        <div
                            className={classNames(s.tab, isActive === "individual" ? s.tab__active : {})}
                            onClick={() => toggleTab("individual")}
                        >
                            For Individuals
                        </div>
                        <div
                            className={classNames(s.tab, isActive === "business" ? s.tab__active : {})}
                            onClick={() => toggleTab("business")}
                        >
                            For Businesses
                        </div>
                    </div>
                </div>
                <ul className={classNames(s.product__cards, isActive === "individual" ? s.product__cards_active : {})}>
                    <li className={s.product__card}>
                        <IoBriefcase className={s.product__card_icon} color={"#CAFF33"}/>
                        <h3 className={s.product__card_title}>Checking Accounts</h3>
                        <p className={s.product__card_text}>
                            Enjoy easy and convenient access to your funds with our range of checking
                            account options. Benefit from features such as
                            online and mobile banking, debit cards, and free ATM access.
                        </p>
                    </li>
                    <li className={s.product__card_center}>
                        <IoBriefcase className={s.product__card_icon} color={"#CAFF33"}/>
                        <h3 className={s.product__card_title}>Savings Accounts</h3>
                        <p className={s.product__card_text}>
                            Build your savings with our competitive interest rates and flexible savings account options.
                            Whether you're saving for a specific goal or want to grow your wealth over time, we have the
                            right account for you.
                        </p>
                    </li>
                    <li className={s.product__card}>
                        <IoBriefcase className={s.product__card_icon} color={"#CAFF33"}/>
                        <h3 className={s.product__card_title}>Loans and Mortgages</h3>
                        <p className={s.product__card_text}>
                            Realize your dreams with our flexible loan and mortgage options. From personal loans to home
                            mortgages,
                            our experienced loan officers are here to guide you through the application process and
                            help you secure the funds you need.
                        </p>
                    </li>
                </ul>
                <ul className={classNames(s.product__cards, isActive === "business" ? s.product__cards_active : {})}>
                    <li className={s.product__card}>
                        <IoBriefcase className={s.product__card_icon} color={"#CAFF33"}/>
                        <h3 className={s.product__card_title}>Loans and Mortgages</h3>
                        <p className={s.product__card_text}>
                            Realize your dreams with our flexible loan and mortgage options. From personal loans to home
                            mortgages,
                            our experienced loan officers are here to guide you through the application process and
                            help you secure the funds you need.
                        </p>
                    </li>
                    <li className={s.product__card_center}>
                        <IoBriefcase className={s.product__card_icon} color={"#CAFF33"}/>
                        <h3 className={s.product__card_title}>Savings Accounts</h3>
                        <p className={s.product__card_text}>
                            Build your savings with our competitive interest rates and flexible savings account options.
                            Whether you're saving for a specific goal or want to grow your wealth over time, we have the
                            right account for you.
                        </p>
                    </li>
                    <li className={s.product__card}>
                        <IoBriefcase className={s.product__card_icon} color={"#CAFF33"}/>
                        <h3 className={s.product__card_title}>Checking Accounts</h3>
                        <p className={s.product__card_text}>
                            Enjoy easy and convenient access to your funds with our range of checking
                            account options. Benefit from features such as
                            online and mobile banking, debit cards, and free ATM access.
                        </p>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default Product;