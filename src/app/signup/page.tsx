'use client'

import React, {useState} from 'react';
import s from "../../styles/SignUp.module.scss"
import classNames from "classnames";
import Link from "next/link";

import {PasswordInput} from '@mantine/core';


import {IoMdEye} from "react-icons/io";
import {FaGoogle} from "react-icons/fa6";
import {FaFacebookF} from "react-icons/fa";
import {FaApple} from "react-icons/fa";

import Testimonials from "@/components/Tabs/Testimonials/Testimonials";

const Page = () => {

    const [shown, setShown] = useState<boolean>(false)

    const togglePass = () => {
        setShown(!shown);
        console.log("click")
    }

    return (
        <main>
            <section className={s.signup}>
                <div className="container">
                    <div className={s.signup__wrapper}>
                        <h2 className={classNames("sectionTitle", s.signup__title)}><span>Sign Up</span></h2>
                        <p className={s.signup__info}>Join our community today! Create an account to unlock exclusive
                            features and personalized experiences.</p>
                        <form className={s.signup__form}>
                            <div className={s.signup__inputs}>
                                <input className={s.signup__inputs_input} type="text" placeholder="Enter First name"/>
                                <input className={s.signup__inputs_input} type="text" placeholder="Enter Last Name"/>
                                <input className={s.signup__inputs_input} type="text" placeholder="Enter Your Email"/>
                                <div className={s.password__inputs}>
                                    <input placeholder="Enter your password" type={shown ? "text" : "password"}
                                           className={s.password__inputs_input}/>
                                    <IoMdEye className={s.password__inputs_check} onClick={togglePass}/>
                                </div>
                            </div>
                            <Link className={s.signup__forgot} href="">Forgot Password?</Link>
                            <div className={s.signup__continue}>
                                <div className={s.continue__buttons}>
                                    <button className={s.continue__button}>Login</button>
                                    <button className={classNames(s.continue__button, s.signup)}>Sign Up</button>
                                </div>
                                <div className={s.continue__variants}>
                                    <div className={s.variants__text}>
                                        <span/>
                                        <p>Or Continue with</p>
                                        <span/>
                                    </div>
                                    <div className={s.variants__icons}>
                                        <FaGoogle/>
                                        <FaFacebookF/>
                                        <FaApple/>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
            <Testimonials/>
        </main>
    );
};

export default Page;