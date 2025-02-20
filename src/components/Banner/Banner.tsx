import React from 'react';
import Link from "next/link";
import s from "../../styles/Banner.module.css"

const Banner = () => {
    return (
        <section className={s.banner}>
            <div className="container">
                <div className={s.banner__inner}>
                    <div>
                        <h2 className="sectionTitle">Start your financial journey with <span>YourBank today!</span></h2>
                        <p className={s.banner__text}>
                            Ready to take control of your finances? Join YourBank now, and let us help
                            you achieve your financial goals with our tailored solutions and exceptional customer service
                        </p>
                    </div>
                    <Link className={s.banner__button} href={""}>Open Account</Link>
                </div>
            </div>
        </section>
    );
};

export default Banner;