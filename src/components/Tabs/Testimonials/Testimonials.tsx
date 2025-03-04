'use client'

import React, {useState} from 'react';
import s from "../../../styles/Testimonials.module.css"
import classNames from "classnames";
import { Swiper, SwiperSlide } from 'swiper/react';

import { FreeMode, Autoplay} from 'swiper/modules';

import {ImQuotesLeft} from "react-icons/im";


const Testimonials = () => {

    const [tab, setTab] = useState<string>("individual")

    const toggleTab = (index: string) => {
        setTab(index);
    }

    return (
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
                        <div className={classNames(s.tab, tab === "individual" ? s.tab__active : {})}
                             onClick={() => toggleTab("individual")}>
                            For Individuals
                        </div>
                        <div className={classNames(s.tab, tab === "business" ? s.tab__active : {})}
                             onClick={() => toggleTab("business")}>
                            For Businesses
                        </div>
                    </div>
                </div>

                {tab === "individual" ? (
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={30}
                        freeMode={false}
                        loop={true}
                        autoplay={{
                            delay: 1500,
                            disableOnInteraction: false
                        }}
                        modules={[FreeMode, Autoplay]}
                        className="mySwiper"
                    >
                        <SwiperSlide className={s.swiper_slide}>
                            <ImQuotesLeft color={"#CAFF33"} className={s.slide_img}/>
                            <p className={s.slide_text}>
                                YourBank has been my trusted financial partner for years. Their personalized service and
                                innovative digital
                                banking solutions have made managing my finances a breeze.
                            </p>
                            <p>Sara T</p>
                        </SwiperSlide>
                        <SwiperSlide className={s.swiper_slide}>
                            <ImQuotesLeft color={"#CAFF33"} className={s.slide_img}/>
                            <p className={s.slide_text}>
                                I recently started my own business, and YourBank has been instrumental in helping me set up
                                my business accounts and
                                secure the financing I needed. Their expert guidance and tailored solutions have been
                                invaluable.
                            </p>
                            <p>John D</p>
                        </SwiperSlide>
                        <SwiperSlide className={s.swiper_slide}>
                            <ImQuotesLeft color={"#CAFF33"} className={s.slide_img}/>
                            <p className={s.slide_text}>
                                YourBank has been my trusted financial partner for years. Their personalized service and
                                innovative digital
                                banking solutions have made managing my finances a breeze.
                            </p>
                            <p>Sara T</p>
                        </SwiperSlide>
                        <SwiperSlide className={s.swiper_slide}>
                            <ImQuotesLeft color={"#CAFF33"} className={s.slide_img}/>
                            <p className={s.slide_text}>
                                I love the convenience of YourBank's mobile banking app. It allows me to stay on top of my
                                finances and make
                                transactions on the go. The app is user-friendly and secure, giving me peace of mind.
                            </p>
                            <p>Emily G</p>
                        </SwiperSlide>
                        <SwiperSlide className={s.swiper_slide}>
                            <ImQuotesLeft color={"#CAFF33"} className={s.slide_img}/>
                            <p className={s.slide_text}>
                                YourBank has been my trusted financial partner for years. Their personalized service and
                                innovative digital
                                banking solutions have made managing my finances a breeze.
                            </p>
                            <p>Sara T</p>
                        </SwiperSlide>
                        <SwiperSlide className={s.swiper_slide}>
                            <ImQuotesLeft color={"#CAFF33"} className={s.slide_img}/>
                            <p className={s.slide_text}>
                                I recently started my own business, and YourBank has been instrumental in helping me set up
                                my business accounts and
                                secure the financing I needed. Their expert guidance and tailored solutions have been
                                invaluable.
                            </p>
                            <p>John D</p>
                        </SwiperSlide>
                    </Swiper>
                ) : (
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={30}
                        freeMode={false}
                        loop={true}
                        autoplay={{
                            delay: 1500,
                            disableOnInteraction: false
                        }}
                        modules={[FreeMode, Autoplay]}
                        className="mySwiper"
                    >
                        <SwiperSlide className={s.swiper_slide}>
                            <ImQuotesLeft color={"#CAFF33"} className={s.slide_img}/>
                            <p className={s.slide_text}>
                                I recently started my own business, and YourBank has been instrumental in helping me set up
                                my business accounts and
                                secure the financing I needed. Their expert guidance and tailored solutions have been
                                invaluable.
                            </p>
                            <p>John D</p>
                        </SwiperSlide>
                        <SwiperSlide className={s.swiper_slide}>
                            <ImQuotesLeft color={"#CAFF33"} className={s.slide_img}/>
                            <p className={s.slide_text}>
                                I love the convenience of YourBank's mobile banking app. It allows me to stay on top of my
                                finances and make
                                transactions on the go. The app is user-friendly and secure, giving me peace of mind.
                            </p>
                            <p>Emily G</p>
                        </SwiperSlide>
                        <SwiperSlide className={s.swiper_slide}>
                            <ImQuotesLeft color={"#CAFF33"} className={s.slide_img}/>
                            <p className={s.slide_text}>
                                YourBank has been my trusted financial partner for years. Their personalized service and
                                innovative digital
                                banking solutions have made managing my finances a breeze.
                            </p>
                            <p>Sara T</p>
                        </SwiperSlide>
                        <SwiperSlide className={s.swiper_slide}>
                            <ImQuotesLeft color={"#CAFF33"} className={s.slide_img}/>
                            <p className={s.slide_text}>
                                I recently started my own business, and YourBank has been instrumental in helping me set up
                                my business accounts and
                                secure the financing I needed. Their expert guidance and tailored solutions have been
                                invaluable.
                            </p>
                            <p>John D</p>
                        </SwiperSlide>
                    </Swiper>
                )}
            </div>
        </section>
    );
};

export default Testimonials;