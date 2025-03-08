import React from 'react';
import Image from "next/image";
import welcome_bg from "@/images/careers/bg-image.jpeg";

import s from "../../../styles/careers/WelcomeCareers.module.scss"

const WelcomeCareers = () => {
    return (
        <section className={s.welcome}>
            <div className="container">
                <div className={s.welcome__inner}>
                    <div className={s.welcome__gen}>
                        <h1 className={s.welcome__gen_title}>
                            Welcome to <span>YourBank</span> Careers!
                        </h1>
                        <p className={s.welcome__gen_text}>
                            Join our team and embark on a rewarding journey in the banking industry. At YourBank, we are committed to fostering
                            a culture of excellence and providing opportunities for professional growth. With a focus on innovation,
                            customer service, and integrity, we strive to make a positive impact in the lives of our customers and communities.
                            Join us today and be a part of our mission to shape the future of banking.
                        </p>
                    </div>
                    <Image src={welcome_bg} alt="Welcome" className={s.welcome__inner_bg}></Image>
                </div>
            </div>
        </section>
    );
};

export default WelcomeCareers;