import React from 'react';
import WelcomeBank from "@/components/Careers/WelcomeCareer/WelcomeBank";
import Mission from "@/components/About/Mission/Mission";
import Releases from "@/components/About/Releases/Releases";

const Page = () => {

    const title = 'Welcome to <span>YourBank</span> Careers!';
    const message = "Join our team and embark on a rewarding journey in the banking industry. At YourBank, we are committed to fostering a culture of excellence and providing opportunities for professional growth. With a focus on innovation, customer service, and integrity, we strive to make a positive impact in the lives of our customers and communities. Join us today and be a part of our mission to shape the future of banking."

    return (
        <main>
            <WelcomeBank title={title} message={message} img_src="/welcome__about-bg.jpeg"/>
            <Mission/>
            <Releases/>
        </main>
    );
};

export default Page;