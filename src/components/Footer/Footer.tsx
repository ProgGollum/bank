import React from 'react';
import MainFooter from "@/components/Footer/MainFooter";
import FooterContact from "@/components/Footer/FooterContact";
import FooterSocial from "@/components/Footer/FooterSocial";

const Footer = () => {
    return (
        <footer className="footer">
            <MainFooter/>
            <FooterContact/>
            <FooterSocial/>
        </footer>
    );
};

export default Footer;