import React from 'react';
import s from "../../../styles/about/Mission.module.scss"
import Image from "next/image";

import mission_flower from "../../../images/about/mission_flower.jpeg"
import mission_eye from "../../../images/about/mission_eye.jpeg"
import classNames from "classnames";

const Mission = () => {
    return (
        <section className={s.mission}>
            <div className="container">
                <h2 className="sectionTitle">
                    <span>Mission & Vision</span>
                </h2>
                <p className={s.mission__info}>
                    We envision being a leading force in the industry, driven by innovation, integrity, and inclusivity, creating a brighter
                    financial future for individuals and businesses while maintaining a strong commitment to customer satisfaction and
                    community development
                </p>
                <ul className={s.mission__list}>
                    <li className={s.mission__item}>
                        <div className={s.mission__item_img}>
                            <Image src={mission_flower} alt="Image"/>
                        </div>
                        <div className={s.mission__item_block}>
                            <h3 className={s.block__title}>Mission</h3>
                            <p className={s.block__text}>
                                At YourBank, our mission is to empower our customers to achieve financial success. We
                                are dedicated to delivering
                                innovative banking solutions that cater to their unique needs. Through personalized
                                services, expert guidance, and
                                cutting-edge technology, we aim to build strong, lasting relationships with our
                                customers. Our mission is to be their
                                trusted partner, helping them navigate their financial journey and realize their dreams.
                            </p>
                        </div>
                    </li>
                    <li className={s.mission__item}>
                        <div className={s.mission__item_img}>
                            <Image src={mission_eye} alt="Image"/>
                        </div>
                        <div className={classNames(s.mission__item_block, s.second)}>
                            <h3 className={s.block__title}>Vision</h3>
                            <p className={s.block__text}>
                                At YourBank, our mission is to empower our customers to achieve financial success. We
                                are dedicated to delivering
                                innovative banking solutions that cater to their unique needs. Through personalized
                                services, expert guidance, and
                                cutting-edge technology, we aim to build strong, lasting relationships with our
                                customers. Our mission is to be their
                                trusted partner, helping them navigate their financial journey and realize their dreams.
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default Mission;