import React from "react";
import Welcome from "@/components/Welcome/Welcome";
import Product from "@/components/Tabs/Product Tabs/Product";
import Cases from "@/components/Cases/Cases";
import Features from "@/components/Tabs/Features Tabs/Features";
import Faq from "@/components/FAQ/Faq";
import Testimonials from "@/components/Tabs/Testimonials/Testimonials";

export default function () {
    return (
        <main>
            <Welcome/>
            <Product/>
            <Cases/>
            <Features/>
            <Faq/>
            <Testimonials/>
        </main>
    )
}