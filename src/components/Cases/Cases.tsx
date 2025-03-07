import React from 'react';
import classNames from "classnames";

import { PiHandCoinsBold } from "react-icons/pi";
import { MdOutlineSavings } from "react-icons/md";
import { BsBank } from "react-icons/bs";
import {Fa0, FaBookOpen} from "react-icons/fa6";
import { LiaCitySolid } from "react-icons/lia";
import { IoIosCash } from "react-icons/io";
import { BsFileBarGraphFill } from "react-icons/bs";
import { AiOutlineDollar } from "react-icons/ai";

import s from "../../styles/Cases.module.css"
import Link from "next/link";

const Cases = () => {
    return (
        <section>
            <div className="container">
                <h2 className="sectionTitle"><span>Use Cases</span></h2>
                <p className={s.cases__info}>
                    At YourBank, we cater to the diverse needs of individuals and businesses alike, offering a wide
                    range of financial
                    solutions
                </p>

                <div className={s.cases__for_individual}>
                    <div className={s.for__individual_cards}>
                        <ul className={classNames(s.for__individual_list, s.for__individual_list__first)}>
                            <li className={s.for__individual_item}>
                                <PiHandCoinsBold color={"#CAFF33"} className={s.item__img}/>
                                <p className={s.item__text}>Managing Personal Finances</p>
                            </li>
                            <li className={s.for__individual_item}>
                                <MdOutlineSavings color={"#CAFF33"} className={s.item__img}/>
                                <p className={s.item__text}>Saving for the Future</p>
                            </li>
                        </ul>
                        <ul className={s.for__individual_list}>
                            <li className={s.for__individual_item}>
                                <BsBank color={"#CAFF33"} className={s.item__img}/>
                                <p className={s.item__text}>Homeowner-ship</p>
                            </li>
                            <li className={s.for__individual_item}>
                                <FaBookOpen color={"#CAFF33"} className={s.item__img}/>
                                <p className={s.item__text}>Education Funding</p>
                            </li>
                        </ul>
                    </div>
                    <div className={s.for__individual_general}>
                        <h3 className={s.general__title}>For Individuals</h3>
                        <p className={s.general__text}>
                            For individuals, our mortgage services pave the way to homeowner-ship, and our flexible
                            personal loans provide vital
                            support during various life milestones. We also prioritize retirement planning, ensuring a
                            financially
                            secure future for our customers
                        </p>
                        <ul className={s.general__percents}>
                            <li className={s.general__percent}>
                                <p className={s.percent__value}>78%</p>
                                <p className={s.percent__text}>Secure Retirement Planning</p>
                            </li>
                            <li className={classNames(s.general__percent, s.general__percent_center)}>
                                <p className={s.percent__value}>63%</p>
                                <p className={s.percent__text}>Manageable Debt Consolidation</p>
                            </li>
                            <li className={s.general__percent}>
                                <p className={s.percent__value}>91%</p>
                                <p className={s.percent__text}>Reducing financial burdens</p>
                            </li>
                        </ul>
                        <Link className={s.general__button} href={"/about"}>Learn More</Link>
                    </div>
                </div>
                <div className={s.cases__for_business}>
                    <div className={s.for__individual_general}>
                        <h3 className={s.general__title}>For Business</h3>
                        <p className={s.general__text}>
                            For businesses, we empower growth with working capital solutions that optimize cash flow,
                            and our tailored financing options fuel business expansion. Whatever your financial aspirations,
                            YourBank is committed to providing the right tools and support to achieve them
                        </p>
                        <ul className={s.general__percents}>
                            <li className={s.general__percent}>
                                <p className={s.percent__value}>65%</p>
                                <p className={s.percent__text}>Cash Flow Management</p>
                            </li>
                            <li className={classNames(s.general__percent, s.general__percent_center)}>
                                <p className={s.percent__value}>70%</p>
                                <p className={s.percent__text}>Drive Business Expansion</p>
                            </li>
                            <li className={s.general__percent}>
                                <p className={s.percent__value}>45%</p>
                                <p className={s.percent__text}>Streamline payroll processing</p>
                            </li>
                        </ul>
                        <Link className={s.general__button} href={"/about"}>Learn More</Link>
                    </div>
                    <div className={classNames(s.for__individual_cards, s.business)}>
                        <ul className={classNames(s.for__individual_list, s.for__individual_list__first)}>
                            <li className={s.for__individual_item}>
                                <LiaCitySolid color={"#CAFF33"} className={s.item__img}/>
                                <p className={s.item__text}>Startups and Entrepreneurs</p>
                            </li>
                            <li className={s.for__individual_item}>
                                <IoIosCash color={"#CAFF33"} className={s.item__img}/>
                                <p className={s.item__text}>Cash Flow Management</p>
                            </li>
                        </ul>
                        <ul className={s.for__individual_list}>
                            <li className={s.for__individual_item}>
                                <BsFileBarGraphFill color={"#CAFF33"} className={s.item__img}/>
                                <p className={s.item__text}>Business Expansion</p>
                            </li>
                            <li className={s.for__individual_item}>
                                <AiOutlineDollar color={"#CAFF33"} className={s.item__img}/>
                                <p className={s.item__text}>Payment Solutions</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Cases;