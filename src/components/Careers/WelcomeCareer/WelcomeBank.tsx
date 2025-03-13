import React, {FC} from 'react';
import Image from "next/image";

import s from "../../../styles/careers/WelcomeCareers.module.scss"

interface WelcomeProps {
    title: string,
    message: string,
    img_src: string
}

const WelcomeBank:FC <WelcomeProps> = ({title, message, img_src}) => {
    return (
        <section className={s.welcome}>
            <div className="container">
                <div className={s.welcome__inner}>
                    <div className={s.welcome__gen}>
                        <h1 dangerouslySetInnerHTML={{__html: title}} className={s.welcome__gen_title}/>
                        <p className={s.welcome__gen_text}>
                            {message}
                        </p>
                    </div>
                    <Image width={968} height={300} src={img_src} alt="Welcome" className={s.welcome__inner_bg}/>
                </div>
            </div>
        </section>
    );
};

export default WelcomeBank;