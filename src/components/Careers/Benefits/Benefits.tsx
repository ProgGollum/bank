import React from 'react';
import {HiOutlinePresentationChartBar} from "react-icons/hi";
import {IoBulbOutline} from "react-icons/io5";
import {FaBriefcase} from "react-icons/fa6";
import {BsFillHddNetworkFill} from "react-icons/bs";

import s from "../../../styles/careers/Benefits.module.scss"

const Benefits = () => {
    return (
        <section className={s.benefits}>
            <div className="container">
                <h2 className="sectionTitle">
                    Our <span>Benefits</span>
                </h2>
                <p className={s.benefits__info}>
                    At YourBank, we value our employees and are dedicated to their well-being and success.
                    We offer a comprehensive range of benefits designed to support their personal and professional
                    growth.
                </p>
                <ul className={s.benefits__list}>
                    <li className={s.benefits__item}>
                        <div className={s.benefits__item_title}>
                            <div className={s.item_img}>
                                <HiOutlinePresentationChartBar />
                            </div>
                            <h3>
                                Competitive Compensation
                            </h3>
                        </div>
                        <p className={s.benefits__item_text}>
                            We provide a competitive salary package that recognizes the skills and expertise of our
                            employees.
                            YourBank believes in rewarding exceptional performance and offering opportunities for
                            financial growth.
                        </p>
                    </li>
                    <li className={s.benefits__item}>
                        <div className={s.benefits__item_title}>
                            <div className={s.item_img}>
                                <IoBulbOutline />
                            </div>
                            <h3>
                                Health and Wellness
                            </h3>
                        </div>
                        <p className={s.benefits__item_text}>
                            We prioritize the health and well-being of our employees by providing comprehensive medical,
                            dental, and vision
                            insurance plans. We also offer wellness programs, gym memberships, and resources to support
                            a healthy lifestyle.
                        </p>
                    </li>
                    <li className={s.benefits__item}>
                        <div className={s.benefits__item_title}>
                            <div className={s.item_img}>
                                <FaBriefcase />
                            </div>
                            <h3>
                                Retirement Planning
                            </h3>
                        </div>
                        <p className={s.benefits__item_text}>
                            YourBank is committed to helping employees plan for their future. We offer a retirement
                            savings plan with a
                            generous employer match to help them build a secure financial foundation for the long term.
                        </p>
                    </li>
                    <li className={s.benefits__item}>
                        <div className={s.benefits__item_title}>
                            <div className={s.item_img}>
                                <BsFillHddNetworkFill />
                            </div>
                            <h3>
                                Work-Life Balance
                            </h3>
                        </div>
                        <p className={s.benefits__item_text}>
                            We understand the importance of maintaining a healthy work-life balance. YourBank offers
                            flexible work
                            arrangements, paid time off, parental leave, and other programs that support employees in
                            managing their
                            personal and professional commitments.
                        </p>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default Benefits;