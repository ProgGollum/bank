import React from 'react';
import s from "../../../styles/about/Releases.module.scss"

import Image from "next/image"
import img1 from "../../../images/about/img01.jpeg"
import img2 from "../../../images/about/img02.jpeg"
import img3 from "../../../images/about/img03.jpeg"
import img4 from "../../../images/about/img04.jpeg"

const Releases = () => {
    return (
        <section className={s.releases}>
            <div className="container">
                <h2 className="sectionTitle"><span>Press Releases</span></h2>
                <p className={s.releases__info}>
                    Stay updated with the latest happenings and exciting developments at YourBank through our press
                    releases.
                </p>
                <ul className={s.releases__list}>
                    <li className={s.releases__item}>
                        <div className={s.releases__item_img}>
                            <Image src={img1} alt="Image 1"/>
                        </div>
                        <div className={s.releases__item_info}>
                            <h3 className={s.item__title}>
                                YourBank Launches New Rewards Program to Enhance Customer Loyalty and Satisfaction
                            </h3>
                            <div className={s.item__disc}>
                                <p className={s.item__disc_text}>Location: India</p>
                                <p className={s.item__disc_text}>Date: 06/11/2024</p>
                            </div>
                            <p className={s.item__text}>
                                YourBank is pleased to announce the introduction of our new Rewards Program, aimed at
                                rewarding
                                our loyal customers and enhancing their banking experience. The program offers exclusive
                                benefits,
                                discounts, and personalized offers tailored to individual customer preferences.
                                With this initiative, YourBank reaffirms its commitment to delivering exceptional value
                                and
                                building lasting relationships with our valued customers.
                            </p>
                        </div>
                    </li>
                    <li className={s.releases__item}>
                        <div className={s.releases__item_img}>
                            <Image src={img2} alt="Image 2"/>
                        </div>
                        <div className={s.releases__item_info}>
                            <h3 className={s.item__title}>
                                YourBank Expands Branch Network with Opening of New Location in Chennai
                            </h3>
                            <div className={s.item__disc}>
                                <p className={s.item__disc_text}>Location: India</p>
                                <p className={s.item__disc_text}>Date: 12/11/2024</p>
                            </div>
                            <p className={s.item__text}>
                                YourBank is excited to announce the grand opening of our newest branch in [City].
                                This expansion is a testament to our continued commitment to serving our customers and
                                providing
                                them with convenient access to our comprehensive range of banking services. The new
                                branch will
                                feature state-of-the-art facilities, a team of dedicated professionals, and a
                                personalized
                                approach to banking, further strengthening our presence in the local community.
                            </p>
                        </div>
                    </li>
                    <li className={s.releases__item}>
                        <div className={s.releases__item_img}>
                            <Image src={img3} alt="Image 3"/>
                        </div>
                        <div className={s.releases__item_info}>
                            <h3 className={s.item__title}>
                                YourBank Partners with Local Nonprofit to Support Financial Education Initiatives
                            </h3>
                            <div className={s.item__disc}>
                                <p className={s.item__disc_text}>Location: India</p>
                                <p className={s.item__disc_text}>Date: 24/11/2024</p>
                            </div>
                            <p className={s.item__text}>
                                YourBank is excited to unveil our new Sustainable Banking Initiative, demonstrating our
                                commitment to environmental responsibility. This initiative includes a range of
                                sustainable banking products and services, such as green loans, eco-friendly investment
                                options, and paperless banking solutions. By incorporating sustainable practices into
                                our operations, we aim to contribute to a greener future while providing innovative
                                banking solutions to our customers.
                            </p>
                        </div>
                    </li>
                    <li className={s.releases__item}>
                        <div className={s.releases__item_img}>
                            <Image src={img4} alt="Image 4"/>
                        </div>
                        <div className={s.releases__item_info}>
                            <h3 className={s.item__title}>
                                YourBank Launches Sustainable Banking Initiative to Promote Environmental Responsibility
                            </h3>
                            <div className={s.item__disc}>
                                <p className={s.item__disc_text}>Location: India</p>
                                <p className={s.item__disc_text}>Date: 28/11/2024</p>
                            </div>
                            <p className={s.item__text}>
                                YourBank is excited to unveil our new Sustainable Banking Initiative, demonstrating our
                                commitment to environmental responsibility. This initiative includes a range of
                                sustainable banking products and services, such as green loans, eco-friendly investment
                                options, and paperless banking solutions. By incorporating sustainable practices into
                                our operations, we aim to contribute to a greener future while providing innovative
                                banking solutions to our customers.
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default Releases;