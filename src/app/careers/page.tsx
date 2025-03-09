import React from 'react';
import WelcomeCareers from "@/components/Careers/WelcomeCareers/WelcomeCareers";
import Values from "@/components/Careers/Values/Values";
import Benefits from "@/components/Careers/Benefits/Benefits";
import Job from "@/components/Careers/Job/Job";
import Faq from "@/components/FAQ/Faq";
import Banner from "@/components/Banner/Banner";

const Page = () => {
    return (
        <main>
            <WelcomeCareers/>
            <Values/>
            <Benefits/>
            <Job/>
            {/*<Faq/>*/}
            <Banner/>
        </main>
    );
};

export default Page;