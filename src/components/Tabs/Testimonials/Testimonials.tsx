'use client'

import React, {useState} from 'react';
import s from "../../../styles/Testimonials.module.css"
import classNames from "classnames";

import { Carousel } from '@mantine/carousel';
import {MantineProvider} from "@mantine/core";
import { ImQuotesLeft } from "react-icons/im";


const Testimonials = () => {

    const [isActive, setIsActive] = useState<number>(1)

    const toggleTab = (index: number) => {
        setIsActive(index);
    }

    return (
        <MantineProvider>
            <section className={s.testimonials}>
                <div className="container">
                    <h2 className="sectionTitle">Our <span>Testimonials</span></h2>
                    <div className={s.testimonials__information}>
                        <p className={s.testimonials__info}>
                            Discover a range of comprehensive and customizable banking products at YourBank, designed to
                            suit your unique financial
                            needs and aspirations
                        </p>
                        <div className={s.tabs}>
                            <div className={classNames(s.tab, isActive === 1 ? s.tab__active : {})}
                                 onClick={() => toggleTab(1)}>
                                For Individuals
                            </div>
                            <div className={classNames(s.tab, isActive === 2 ? s.tab__active : {})}
                                 onClick={() => toggleTab(2)}>
                                For Businesses
                            </div>
                        </div>
                    </div>
                    <Carousel
                        height={"300px"}
                        slideSize="33.333333%"
                        slideGap="md"
                        loop
                        align="start"
                        slidesToScroll={3}
                        className={classNames(s.carousel, isActive === 1 ? s.carousel__active : {})}
                    >
                        <Carousel.Slide className={s.slide}>
                            <ImQuotesLeft color={"#CAFF33"} size={"3rem"} className={s.slide_img}/>
                            <p className={s.slide_text}>
                                YourBank has been my trusted financial partner for years. Their personalized service and innovative digital
                                banking solutions have made managing my finances a breeze.
                            </p>
                            <p>Sara T</p>
                        </Carousel.Slide>
                        <Carousel.Slide className={s.slide}>
                            <ImQuotesLeft color={"#CAFF33"} size={"3rem"} className={s.slide_img}/>
                            <p className={s.slide_text}>
                                I recently started my own business, and YourBank has been instrumental in helping me set up my business accounts and
                                secure the financing I needed. Their expert guidance and tailored solutions have been invaluable.
                            </p>
                            <p>John D</p>
                        </Carousel.Slide>
                        <Carousel.Slide className={s.slide}>
                            <ImQuotesLeft color={"#CAFF33"} size={"3rem"} className={s.slide_img}/>
                            <p className={s.slide_text}>
                                I love the convenience of YourBank's mobile banking app. It allows me to stay on top of my finances and make
                                transactions on the go. The app is user-friendly and secure, giving me peace of mind.
                            </p>
                            <p>Emily G</p>
                        </Carousel.Slide>
                        <Carousel.Slide className={s.slide}>
                            <ImQuotesLeft color={"#CAFF33"} size={"3rem"} className={s.slide_img}/>
                            <p className={s.slide_text}>
                                YourBank has been my trusted financial partner for years. Their personalized service and innovative digital
                                banking solutions have made managing my finances a breeze.
                            </p>
                            <p>Sara T</p>
                        </Carousel.Slide>
                        <Carousel.Slide className={s.slide}>
                            <ImQuotesLeft color={"#CAFF33"} size={"3rem"} className={s.slide_img}/>
                            <p className={s.slide_text}>
                                I recently started my own business, and YourBank has been instrumental in helping me set up my business accounts and
                                secure the financing I needed. Their expert guidance and tailored solutions have been invaluable.
                            </p>
                            <p>John D</p>
                        </Carousel.Slide>

                    </Carousel>
                    <Carousel
                        height={"300px"}
                        slideSize="33.333333%"
                        slideGap="md"
                        loop
                        align="start"
                        slidesToScroll={3}
                        className={classNames(s.carousel, isActive === 2 ? s.carousel__active : {})}
                    >
                        <Carousel.Slide className={s.slide}>
                            <ImQuotesLeft color={"#CAFF33"} size={"3rem"} className={s.slide_img}/>
                            <p className={s.slide_text}>
                                I recently started my own business, and YourBank has been instrumental in helping me set up my business accounts and
                                secure the financing I needed. Their expert guidance and tailored solutions have been invaluable.
                            </p>
                            <p>John D</p>
                        </Carousel.Slide>
                        <Carousel.Slide className={s.slide}>
                            <ImQuotesLeft color={"#CAFF33"} size={"3rem"} className={s.slide_img}/>
                            <p className={s.slide_text}>
                                I love the convenience of YourBank's mobile banking app. It allows me to stay on top of my finances and make
                                transactions on the go. The app is user-friendly and secure, giving me peace of mind.
                            </p>
                            <p>Emily G</p>
                        </Carousel.Slide>
                        <Carousel.Slide className={s.slide}>
                            <ImQuotesLeft color={"#CAFF33"} size={"3rem"} className={s.slide_img}/>
                            <p className={s.slide_text}>
                                YourBank has been my trusted financial partner for years. Their personalized service and innovative digital
                                banking solutions have made managing my finances a breeze.
                            </p>
                            <p>Sara T</p>
                        </Carousel.Slide>
                        <Carousel.Slide className={s.slide}>
                            <ImQuotesLeft color={"#CAFF33"} size={"3rem"} className={s.slide_img}/>
                            <p className={s.slide_text}>
                                I recently started my own business, and YourBank has been instrumental in helping me set up my business accounts and
                                secure the financing I needed. Their expert guidance and tailored solutions have been invaluable.
                            </p>
                            <p>John D</p>
                        </Carousel.Slide>
                    </Carousel>
                </div>
            </section>
        </MantineProvider>
    );
};

export default Testimonials;