'use client'

import React, {useState} from 'react';
import s from "../../styles/Login.module.scss"
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
            <section className={s.login}>
                <div className="container">
                    <div className={s.login__wrapper}>
                        <h2 className={classNames("sectionTitle", s.login__title)}><span>Login</span></h2>
                        <p className={s.login__info}>Welcome back! Please log in to access your account.</p>
                        <form className={s.login__form}>
                            <div className={s.login__inputs}>
                                <input className={s.login__inputs_input} type="text" placeholder="Enter your Email"/>
                                <div className={s.password__inputs}>
                                    <input placeholder="Enter your password" type={shown ? "text" : "password"}
                                           className={s.password__inputs_input}/>
                                    <IoMdEye className={s.password__inputs_check} onClick={togglePass}/>
                                </div>
                            </div>
                            <Link className={s.login__forgot} href="">Forgot Password?</Link>
                            <div className={s.login__continue}>
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