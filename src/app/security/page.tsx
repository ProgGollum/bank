import React from 'react';
import WelcomeBank from "@/components/Careers/WelcomeCareer/WelcomeBank";
import Protect from "@/components/Security/Protect";
import Faq from "@/components/FAQ/Faq";

const Page = () => {

    const title = "Your Security is Our <span>Top Priority</span>"
    const message = "At YourBank, we understand the importance of keeping your financial information secure. We employ robust security measures and advanced technologies to protect your personal and financial data. Rest assured that when you bank with us, your security is our utmost priority."

    return (
        <main>
            <WelcomeBank title={title} message={message} img_src="/welcome__security-bg.jpeg"/>
            <Protect/>
            <Faq/>
        </main>
    );
};

export default Page;